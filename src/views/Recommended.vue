<template>
    <div class="recommended">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(item, index) in imgData">
                <img :src="item.url" alt=""></van-swipe-item>
        </van-swipe>
        <div class="container">

            <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
                <div class="content-list" v-for="(item, index) in loadedData" v-if="!item.note && !item.dsp && !item.mg"
                    @click="chooseCaiPu(item)">
                    <RecomList :recommend-list="item"></RecomList>
                </div>
            </van-list>



        </div>

        <div class="dianzi" style="height: 10vh"></div>
    </div>
</template>
<script>
import RecomList from '../components/RecomList.vue'
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'Recommended',
    components: {
        RecomList
    },
    data() {
        return {
            ReList: [],
            //显示加载提示
            loading: false,
            //是否加载数据完成
            finished: false,
            //加载数据量
            count: 10,
            //数据偏移量
            lim: 20,
            //已加载的数据量
            loadedData: [],
            //函数防抖定时器序号
            timer: null,
            // 轮播图数据
            imgData: [
                {
                    url: "https://i1.douguo.com//upload/note/2/2/d/22ab8451ec3b6f497863577f844d87bd.jpg",
                },
                {
                    url: "https://i1.douguo.com//upload/note/e/e/1/eed88fb156b259bf39c5ebfa7a22e321.jpg",
                },
                {
                    url: "https://i1.douguo.com//upload/banner/b/b/e/bbe84e81b64cd87522e9af5c4e55a3de.jpg",
                },
                {
                    url: "https://i1.douguo.com//upload/note/3/d/6/3d1ee9fde782786102bc7f08ac1809b6.jpg",
                },
            ],
        }
    },
    computed: {
        ...mapState(['isLogin'])
    },
    created() {
        // this.getRe()
    },
    methods: {
        onLoad() {

            if (this.timer) {
                clearTimeout(this.timer)
            }



            this.timer = setTimeout(() => {
                // console.log('函数防抖控制触发频率');
                this.timer = null
                //数据请求
                this.axios({
                    method: "get",
                    url: `https://apis.netstart.cn/douguo/home/recommended/${this.lim}/10`,
                }).then((res) => {
                    let listD = res.data.result.list;

                    listD.forEach((item) => {

                        // this.listData = item.r;

                        this.loadedData.push(item);

                        // console.log(item.r.id);

                    });

                    if (this.loadedData.length <= 20) {
                        this.lim += 10;
                    }

                    this.loading = false;

                    // 数据全部加载完成
                    if (this.loadedData.length >= 60) {
                        this.finished = true;
                    }

                    // console.log(this.loadedData);
                })
                    .then(() => {
                        if (this.isLogin) {
                            let likelist = JSON.parse(localStorage.getItem('cookID'))
                            for (let i = 0; i < this.loadedData.length; i++) {
                                if (this.loadedData[i].r) {
                                    for (let j = 0; j < likelist.length; j++) {
                                        if (this.loadedData[i].r.id == likelist[j]) {
                                            // console.log('执行')
                                            this.loadedData[i].r.collect_status = 1
                                        }
                                    }
                                }
                            }
                        }
                    })

            }, 1000)



        },
        chooseCaiPu(item) {
            // console.log(item.r.id)
            this.$router.push({
                name: 'Detail',
                params: {
                    id: item.r.id
                }
            })
        },

    }
}
</script>
<style lang="less" scoped>
.recommended {
    width: 100%;
    height: 600px;
    overflow-y: scroll;
    overflow-x: hidden;


    .my-swipe .van-swipe-item {
        margin-top: 5px;
        color: #fff;
        text-align: center;

        img {
            width: 100%;
            height: 150px;
        }
    }

    .container {

        width: 100%;
        height: auto;

        .content-list {
            margin-bottom: 10px;
            width: 100%;
            height: auto;
        }
    }

}
</style>