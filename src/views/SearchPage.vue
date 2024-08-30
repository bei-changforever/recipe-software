<template>
    <div class="searchPage">
        <!-- <div class="searchPage-item">
            <div class="searchPage-item1"></div>
        </div> -->

        <div class="searchPage-item2">
            <div class="searchPage-item4">
                <div :class="{ 'searchPage-item3': true, activ: index === activIdex }" v-for="(item, index) in tltle" :key="index" @click="ggAdd(index)">{{ item.tit }}</div>
            </div>
            <div class="searchPage-item3">视频</div>
        </div>

        <div>
            <div class="searchpagemenu-item" v-for="(item, index) in listData" :key="index">
                <div class="searchpagemenu-item1" @click="searData(item.r.id)">
                    <img class="img-auto" height="100%" :src="item.r.img" />
                </div>

                <div class="searchpagemenu-item2">
                    <div class="searchpagemenu-item201">{{ item.r.n }}</div>
                    <div class="searchpagemenu-item202">{{ item.r.rate }}分</div>
                    <div class="searchpagemenu-item203" v-if="listofvegetables"></div>
                    <div class="searchpagemenu-item204">
                        <div class="searchpagemenu-item205">
                            <img class="img-auto" :src="item.r.a.p"/>
                        </div>

                        <div class="searchpagemenu-item206">{{ item.r.a.n }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "searchPage",
    created() {
        this.kpl();
    },
    data() {
        return {
            activIdex: 0,
            listData: [],
            listofvegetables: false,
            tltle: [
                {
                    tit: "综合",
                },
                {
                    tit: "收藏高",
                },
                {
                    tit: "学做多",
                },
            ],
        };
    },

    methods: {
        kpl() {
            let vas = this.$route.query.name;

            this.axios({
                method: "get",
                url: `https://apis.netstart.cn/douguo/recipe/search?keyword=${vas}&order=0&type=0&offset=0&limit=20`,
            }).then((res) => {
                this.listData = res.data.result.list;

                console.log(this.listData);
            });
        },

        ggAdd(index) {
            if (this.activIdex === index) {
                return;
            }

            this.activIdex = index;
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
};
</script>

<style lang="less" scoped>
.searchPage-item {
    height: 30px;
}

.searchPage-item2 {
    padding: 10px 20px 10px 20px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid rgb(245, 245, 245);
    border-top: 1px solid rgb(245, 245, 245);
}

.searchPage-item3 {
    color: rgb(141, 142, 142);
}

.searchPage-item4 {
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 120px;
    color: rgb(141, 142, 142);
}

.activ {
    color: #000;
    font-weight: 800;
}

.searchpagemenu-item {
    display: flex;
    padding: 10px 0px 15px 15px;
}

.searchpagemenu-item1 {
    width: 160px;
    height: 100px;
}

.img-auto {
    display: block;
    width: 100%;
}

.searchpagemenu-item2 {
    margin-left: 10px;
}

.searchpagemenu-item201 {
    font-weight: 700;
    width: 200px;
    font-size: 16px;
}

.searchpagemenu-item202 {
    margin-top: 10px;
}

.searchpagemenu-item203 {
    margin-top: 10px;
}

.searchpagemenu-item205 {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    overflow: hidden;
}

.searchpagemenu-item204 {
    display: flex;
    align-items: center;
    margin-top: 10px;
}

.searchpagemenu-item206 {
    margin-left: 5px;
    color: rgb(170, 170, 170);
}
</style>
