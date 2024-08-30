<template>
    <div class="feed">
        <div class="feed_topic">
            <span>豆果美食，会做饭很酷~</span>
            <br>
            <br>
            <span style="font-size: 15px;font-weight: 400;color: #999;">你关注人的动态会出现在这</span>
            <br>
            <span style="font-size: 15px;font-weight: 400;color: #999;">为你推荐了一些有趣的人，快关注 TA 们吧</span>
        </div>
        <div class="container" v-for="(item, index) in feedList" @click="choose(item)">
            <FeedList :fe-list="item"></FeedList>
        </div>
        <div class="dianzi" style="height: 15vh"></div>
    </div>
</template>
<script>
import FeedList from '../components/FeedList.vue'
import { mapState } from 'vuex'
export default {
    name: 'Feed',
    components: {
        FeedList
    },
    data() {
        return {
            feedList: ''
        }
    },
    computed: {
        ...mapState(['isLogin'])
    },
    created() {
        this.getFeedList()
    },
    methods: {
        getFeedList() {
            this.axios({
                method: 'get',
                url: 'https://apis.netstart.cn/douguo/home/ffeeds/0/20'
            }).then(res => {
                if (res.status === 200) {
                    this.feedList = res.data.result.rfs
                    // console.log(this.feedList)
                }
            }).then(() => {
                if (this.isLogin) {
                    let likelist = JSON.parse(localStorage.getItem('cookID'))
                    for (let i = 0; i < this.feedList.length; i++) {
                        if (this.feedList[i].u) {
                            for (let j = 0; j < likelist.length; j++) {
                                if (this.feedList[i].item_id == likelist[j]) {
                                    // console.log('执行')
                                    this.feedList[i].like_state = 1
                                }
                            }
                        }
                    }
                }

            }).then(() => {

                if (this.isLogin) {
                    let likeuserlist = JSON.parse(localStorage.getItem('likeuserId'))
                    for (let i = 0; i < this.feedList.length; i++) {
                        if (this.feedList[i].u) {
                            for (let j = 0; j < likeuserlist.length; j++) {
                                if (this.feedList[i].u.id == likeuserlist[j]) {
                                    // console.log('执行')
                                    this.feedList[i].u.is_prime = true
                                }

                            }
                        }
                    }
                }

            })
        },
        choose(item) {
            // console.log(item)
            this.$router.push({
                name: 'Detail',
                params: {
                    id: item.item_id
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.feed {
    width: 100%;
    height: 600px;
    overflow-x: hidden;
    overflow-y: scroll;

    .feed_topic {
        width: 100%;
        height: 100px;
        padding: 10px;
        line-height: 20px;
        background-color: rgb(250, 250, 250);

        span {
            font-size: 18px;
            font-weight: 700;
        }
    }

    .container {
        width: 100%;
        height: auto;
    }
}
</style>