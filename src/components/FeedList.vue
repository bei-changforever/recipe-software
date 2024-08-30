<template>
    <div class="feedlist">
        <div class="content_box">
            <div class="ar">
                <div class="img" @click="userid(FeList)">
                    <img :src="FeList.u.p" alt="">
                </div>
                <div class="text">
                    <div class="creatername">
                        <span style="font-size: 16px;font-weight: 600;">{{ FeList.u.n }}</span> &nbsp;<span
                            style=" color: rgb(186,164,90) ; font-style: italic;">lv{{ FeList.u.lvl }}</span>
                    </div>
                    <div class="followers">
                        <span style="color: #999;">{{ FeList.u.followers_count_text }}</span>·
                        <span style="color: #999;">{{ FeList.u.recipes_count_text }}</span>
                    </div>
                </div>
                <div class="btn">
                    <van-button round type="info" v-if="!FeList.u.is_prime ">+关注</van-button>
                    <van-button v-else round type="info"
                            style="color: rgb(162,162,162);background-color: rgb(245,245,245);"
                            >已关注</van-button>
                </div>
            </div>
            <div class="seaction">
                <img :src="FeList.img" alt="">
                <div class="play" v-if="FeList.video_url"><van-icon name="play-circle" /></div>
            </div>
            <div class="footer">
                <div class="footer_top">
                    <div class="user_head">
                        <ul>
                            <li v-for="(val, i) in FeList.collect_users">
                                <img :src="val.p" alt="">
                            </li>
                        </ul>
                    </div>
                    <div class="collect">{{ FeList.collect_count_text }}</div>
                    <div class="icon">
                        <ul>
                            <li><van-icon name="star-o" v-if="FeList.like_state
                            == 0" />
                                <van-icon color="rgb(244,206,83)" name="star" v-else />
                            </li>
                            <li><van-icon name="chat-o" /></li>
                            <li><van-icon name="share-o" /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="name">
                <span>{{ FeList.n }}</span>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FeedList',
    props: {
        FeList: {

        }
    },
    methods: {
        userid(item) {
            let user_id = item.user.user_id

            // console.log(user_id)

            this.$router.push({
                name: 'Userid',
                params: {
                    userid: user_id
                }
            })
        },
    }

}
</script>
<style lang="less" scoped>
.feedlist {
    width: 100%;
    height: auto;

    .content_box {
        width: 100%;
        height: auto;

        .ar {
            width: 100%;
            height: 50px;

            display: flex;
            justify-content: space-around;

            .img {
                width: 50px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;

                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: block;
                }
            }

            .text {
                width: 200px;
                height: 50px;
                display: flex;
                flex-direction: column;
                justify-content: center;

            }


            .btn {
                width: 70px;
                height: 50px;
                display: flex;
                justify-content: center;
                align-items: center;

                .van-button {
                    width: 70px;
                    height: 30px;
                    border: 0;
                    color: black;
                    padding: 2px;
                    background-color: rgb(246, 199, 85);
                }
            }
        }

        .seaction {
            width: 100%;
            height: auto;
            position: relative;

            img {
                width: 100%;
                height: auto;
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

        .footer {
            width: 100%;
            height: auto;

            .footer_top {
                margin-top: 5px;
                width: 100%;
                height: 50px;
                display: flex;
                justify-content: space-around;

                .user_head {
                    max-width: 25%;
                    height: 100%;

                    ul {
                        width: 100%;
                        height: 100%;
                        display: flex;

                        li {
                            width: 20%;
                            height: 100%;
                            display: flex;
                            align-items: center;

                            img {
                                width: 30px;
                                height: 30px;
                                border-radius: 50%;
                                display: block;
                                border: 1px solid #999;
                            }
                        }
                    }
                }

                .collect {
                    width: 120px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                }


                .icon {
                    width: 100px;
                    // background-color: pink;
                    height: 100%;

                    ul {
                        width: 100%;
                        height: 100%;
                        display: flex;

                        li {
                            flex: 1;
                            text-align: center;
                            line-height: 50px;
                            font-size: 25px;
                        }
                    }
                }
            }
        }

        .name {
            margin-top: 5px;
            width: 100%;
            height: auto;

            span {
                margin-left: 10px;
            }
        }
    }
}
</style>