<template>
    <div class="videos">
        <van-swipe vertical  :show-indicators="false" :loop="false" :height="500">
            <van-swipe-item v-for="(item, index) in list">
                <div class="name">
                    <div class="img">
                        <img :src="item.r.a.p" alt="">
                    </div>
                    <div class="why">
                        <span style="font-size: 16px;font-weight: 600;">{{ item.r.a.n }}</span>&nbsp;<span
                            style="color: rgb(187,167,94)">lv{{ item.r.a.lvl }}</span>
                    </div>

                </div>
                <div class="section" @click="choose(item)">
                    <img :src="item.r.img" alt="">
                    <div class="play"><van-icon name="play-circle" /></div>
                </div>
                <div class="user">
                    <div class="user-top">
                        <ul>
                            <li v-for="(val, i) in item.r.collect_users">
                                <img :src="val.p" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="collect">
                        {{ item.r.collect_count_text }}·{{item.r.vc}}观看
                    </div>
                    <div class="icon"><van-icon name="star-o" /></div>
                </div>
                <div class="title">{{ item.r.stdname }}</div>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>
<script>

export default {
    name: 'Videos',
    components: {

    },
    data() {
        return {
            list: '',
  
        }
    },
    created() {
        this.getVideo()
    },
    methods: {
        getVideo() {
            this.axios({
                method: 'get',
                url: 'https://apis.netstart.cn/douguo/home/videos/0/20'
            }).then(res => {
                if (res.status === 200) {
                    this.list = res.data.result.list.filter(item => {
                        return item.r
                    })
                    // console.log(this.list)
                }
            })
        },
        choose(item) {
            console.log(item)
            this.$router.push({
            name: 'Detail',
            params: {
                id: item.r.id
            }
           })
        } 
    }
}
</script>
<style lang="less" scoped>
.videos {
    width: 100%;
    height: auto;

.van-swipe {
    width: 100%;
    height: 500px !important; 
     .van-swipe-item {
            width: 100%;
            display: flex;
            flex-direction: column;
            // background-color: pink;

            .name {
                width: 100%;
                height: 50px;
                display: flex;

                .img {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 50px;
                    height: 50px;

                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        display: block;
                    }
                }

                .why {
                    display: flex;
                    align-items: center;
                    width: 200px;
                    height: 50px;
                }
            }

            .section {
                width: 100%;
                height: 400px;
                position: relative;

                img {
                    width: 100%;
                    height: 100%;
                    display: block;
                }

                .play {
                    position: absolute;
                    bottom: 10px;
                    right: 10px;
                    font-size: 35px;
                    color: white;
                }
            }

            .user {
                margin-top: 5px;
                width: 100%;
                height: auto;
                display: flex;
                align-items: center;
                justify-content: space-around;

                .user-top {
                    max-width: 20%;
                    height: 30px;


                    ul {
                        width: 100%;
                        height: 100%;
                        display: flex;

                        li {
                            width: 20%;
                            height: 100%;

                            img {
                                width: 20px;
                                height: 20px;
                                display: block;
                                border-radius: 50%;
                                border: 1px solid #999;
                            }
                        }
                    }
                }

                .collect {
                    width: 200px;
                    height: 30px;
                    line-height: 30px;
                }

                .icon {
                    width: 50px;
                    height: 30px;
                    text-align: center;
                    line-height: 30px;
                    font-size: 18px;
                }
            }

            .title {
                width: 100%;
                height: 20px;
                line-height: 20px;
                text-indent: 1em;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
}
       
    
}
</style>