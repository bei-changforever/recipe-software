<template>
    <div class="user">
        <div>
            <div class="user-box">
                <van-icon name="arrow-left" @click="backs" />

                <van-icon name="weapp-nav" />
            </div>

            <div class="ggg">
                <div class="head-box">
                    <div class="img" v-if="lisData.user">
                        <img :src="lisData.user.user_photo" />
                    </div>
                </div>
                <div class="name" v-if="lisData.user">
                    <div class="name-item" v-if="lisData.user">
                        <h3>{{ lisData.user.nick }}</h3>
                        <p class="dengji">LV.{{ lisData.user.lvl }}</p>
                    </div>

                    <div class="ziliao" v-if="!chooselike" @click="primse(lisData.user)">关注</div>
                    <div class="ziliao" v-else @click="primse(lisData.user)"  style="color: rgb(162,162,162);background-color: rgb(245,245,245);">已关注</div>
                </div>
            </div>
            <h3 v-if="lisData.user">我是大神 {{ lisData.user.age }} IP属地 {{ lisData.user.ip_address_location }}</h3>
            <p class="jieshao" v-if="lisData.user">{{ lisData.user.introduction }}</p>
            <div class="num-box" v-if="lisData.user">
                <span>
                    <p class="num">{{ lisData.user.followers_count_text }}</p>
                    <p class="text">关注</p>
                </span>
                <span>
                    <p class="num">{{ lisData.user.followers_count_text }}</p>
                    <p class="text">粉丝</p>
                </span>
                <span>
                    <p class="num">{{ lisData.user.favoed_count_text }}</p>
                    <p class="text">被收藏</p>
                </span>
                <span>
                    <p class="num">{{ lisData.user.noted_count_text }}</p>
                    <p class="text">被学做</p>
                </span>
                <span>
                    <p class="num">{{ lisData.user.point_text }}</p>
                    <p class="text">经验值</p>
                </span>
            </div>

            <div class="kl">
                <div class="kl1">厨房用具</div>

                <div class="kl2">
                    <span>双枪长斑·九阳电饭煲 </span>
                </div>
            </div>

            <div class="cp">
                <div class="cp1 act">菜谱161</div>
                <div class="cp1">笔记175</div>
                <div class="cp1">搜藏161</div>
            </div>

            <div class="hj">
                <van-search v-model="value" placeholder="搜素用户菜谱" />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: "Userid",

    data() {
        return {
            value: "",
            lisData: [],
        };
    },
    computed: {
        chooselike() {
           if (this.isLogin) {
                if (this.lisData.user) {
                    let fv = JSON.parse(localStorage.getItem('likeuserId'))
                    let res = fv.some(val => {
                        return val == this.lisData.user.user_id
                    })

                    if (res) {
                        this.lisData.user.is_prime = true
                    } else {
                        this.lisData.user.is_prime = false
                    } 

                }
            }
            return this.lisData.user.is_prime
        },
        ...mapState(['isLogin'])
    },
    created() {
        //截取商品pid
        let gh = this.$route.params.userid;

        // console.log("pid ==> ", gh);

        this.getProductDetailByPid(gh);
    },
    methods: {
        getProductDetailByPid(pid) {
            this.axios({
                method: "get",
                url: `https://apis.netstart.cn/douguo/user/info/${pid}`,
            }).then((res) => {
                if (res.data) {
                    this.lisData = res.data.result;
                    // console.log(this.lisData)
                }
            });
        },

        backs() {
            this.$router.go(-1);
        },
        primse(item) {
            // console.log(item)
            if (this.isLogin) {
                let likeuser = JSON.parse(localStorage.likeuserId)
                item.is_prime = !item.is_prime

                if (item.is_prime) {
                    likeuser = [
                        item.user_id,
                        ...likeuser
                    ]

                    localStorage.likeuserId = JSON.stringify(likeuser)
                }
                else if (!item.is_prime) {
                    likeuser = likeuser.filter(val => {
                        return val != item.user_id
                    })

                    localStorage.likeuserId = JSON.stringify(likeuser)
                }
            } else {
                this.$toast({
                    message: '请先登录'
                })
                item.is_prime = false
            }
        }
    },
};
</script>

<style lang="less" scoped>
.name-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 30px;
}

.user-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 10px;
    padding-bottom: 0px;
}

.hj {
    border-radius: 25px;
}

.kl {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-bottom: 0px;
}

.cp {
    width: 300px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    padding-bottom: 0px;
    margin: 0 auto;
    margin-top: 50px;
    color: #ccc;
    border-bottom: 1px solid #ccc;
    height: 50px;
}

.act {
    font-weight: 700;
    color: #000;
    border-bottom: 3px solid rgb(246, 199, 83);
}

.kl1 {
    font-size: 14px;
}

.img-item {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
}

.ggg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 10px;
    margin-top: 10px;
}

.head {
    display: flex;
    height: 30px;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
}

.img2 {
    margin-right: 10px;
}

.img3 {
    margin-right: 10px;
}

.head-list {
    display: flex;
    height: 30px;
    justify-content: space-between;
    align-items: center;
}

.head img {
    width: 25px;
    height: 25px;
}

.img {
    width: 80px;
    height: 80px;
    margin: 0;
    border: 0.1px solid #eee;

    border-radius: 50%;
    text-align: center;
    display: inline-block;
}

.img img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-top: 5px;
}

.dengji {
    color: rgb(199, 181, 10);
    font-style: oblique;
    font-size: 6px;
    margin-bottom: -5px;
    margin-left: 5px;
}

.ziliao {
    width: 250px;
    height: 35px;
    color: black;
    font-size: 14px;
    font-weight: 600;
    background: rgb(246, 199, 85);
    border-radius: 20px 20px 20px 20px;
    text-align: center;
    line-height: 35px;
}

h3 {
    margin-top: 20px;
    margin-left: 10px;
}

.jieshao {
    display: block;
    box-sizing: border-box;
    // color: #ccc;
    padding: 10px;

    width: 100%;
    height: auto;
    color: #999;
}

.num-box {
    display: flex;
    justify-content: space-between;
    padding: 0px 10px 0px 10px;
}

.num-box span {
    text-align: center;
}

.text {
    margin-top: -10px;
    color: #ccc;
}

.vip {
    width: 94%;
    margin-left: 3%;
    height: 60px;
    background: #424242;
    border-radius: 10px 10px 10px 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
}

.vip-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.vip-item1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.vip .img1 {
    width: 35px;
    height: 30px;
    margin-right: 10px;
}

.span2 {
    display: inline-block;
    margin-left: 45px;
    margin-top: -5px;
}

.p1 {
    font-size: 14px;
    color: #f9eabe;
}

.p2 {
    color: #ccc;
    margin-top: -10px;
}

.s {
    color: #aaa;
    font-size: 24px;
}

.vip .img2 {
    width: 35px;
    height: 30px;
}

.box {
    margin-top: 30px;
}

.span3 {
    display: inline-block;
    margin-left: 65px;
    margin-top: -5px;
}
</style>
