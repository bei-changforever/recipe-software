<template>
    <div class="star">
        <div class="fvorites-box1">
            <div class="fvorites-box101"  v-if="$store.state.isLogin"><h1>您收藏的菜谱</h1></div>
            <div class="fvorites-box101"  v-else><h1>暂未登录</h1></div>
        </div>

        <div class="adc"  v-if="$store.state.isLogin">
            <div class="adc1"></div>

            <div class="adc2">
                <div class="adc01">100%未学做</div>

                <div class="adc02">我是厨神,请叫我厨神</div>
            </div>
            <div class="adc3">
                <div class="adc03">管理</div>
                <div class="adc04">搜索</div>
            </div>
        </div>

      

        <div class="fvorites-box102" v-if="$store.state.isLogin" v-for="(item, index) in listData" :key="index">
            <div class="fvorites-box103">
                <img class="img-auto" :src="item.photo_path" @click="searData(item.cook_id)" />
            </div>

            <div class="fvorites-box104">
                <div class="fvorites-box110">{{ item.title }}</div>
                <div class="fvorites-box105">{{ item.vc }}人看过</div>

                <div class="fvorites-box107">
                    <div class="fvorites-box108">
                        <img class="img-auto" :src="item.user.user_photo" />
                    </div>

                    <div class="fvorites-box109">{{ item.user.nickname }}</div>
                </div>
            </div>
        </div>
        <div class="dianzi" style="height: 10vh"></div>
    </div>
</template>
<script>
export default {
    name: 'Star',
    data() {
        return {
            listData: [],
        };
    },
    created() {
         let collect = JSON.parse(localStorage.getItem('cookID'))
        //  console.log(collect)

         collect.forEach(item => {
            this.getDetail(item)
         })
        // this.listData = this.LikeList;
        
       
    },
    methods: {

        getDetail(id) {
            this.axios({
                method: 'get',
                url: `https://apis.netstart.cn/douguo/recipe/detail/${id}`
            }).then(res=> {
                if(res.data.state == 'success') {
                    this.listData.unshift(res.data.result.recipe)
                }

                // console.log(this.listData)
            })
        },
   

        searData(pid) {
            this.$router.push({
                name: 'Detail',
                params: {
                    id: pid
                }
            })
        },
    },
}
</script>
<style lang="less" scoped>
.adc {
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.adc3 {
    margin-left: 130px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.adc04 {
    margin-left: 20px;
}

.adc1 {
    width: 30px;
    border-radius: 50%;
    height: 30px;
    background-color: rgb(246, 241, 241);
}
.adc2 {
    margin-left: 10px;
}

.adc02 {
    color: #ccc;
}
.img-auto {
    display: block;
    width: 100%;
    height: 100%;
}

.fvorites-box1 {
    margin-left: 20px;
}
.fvorites-box102 {
    padding: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.fvorites-box103 {
    width: 150px;
    height: 100px;
    border-radius: 5px;
    overflow: hidden;
}

.fvorites-box104 {
    margin-left: 10px;
}

.fvorites-box105 {
    margin-top: 10px;
    margin-bottom: 10px;
}

.fvorites-box107 {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.fvorites-box108 {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
}

.fvorites-box109 {
    margin-left: 10px;
    color: #ccc;
}
</style>