<template>
    <div class="recomlist">
        <!-- {{chrecommendList}} -->
        <div class="header">
            <div class="img">
                <img :src="haverAR.p" alt="">
            </div>
            <div class="name">{{ haverAR.n }}&nbsp;&nbsp;<span
                    style="color: rgb(193,167,85);font-size: 14px;font-style: italic;">lv{{ haverAR.lvl }}</span></div>
            <div class="more"><van-icon name="weapp-nav" /></div>
        </div>
        <div class="section">
            <img :src="haverR.img" alt="">
            <div class="play" v-if="haverR.vfurl"><van-icon name="play-circle" /></div>
        </div>
        <div class="footer">
            <div class="footer-top">
                <div class="user-head" v-if="haverR.collect_users">
                    <ul>
                        <li v-for="(val, i) in haverR.collect_users">
                            <img :src="val.p" alt="">
                        </li>
                    </ul>
                </div>
                <div class="user-head" v-else>
                    <span>{{ haverR.n }}</span>
                </div>
                <div class="collect-count" v-if="haverR.collect_count_text">{{ haverR.collect_count_text }}</div>
                <div class="collect">
                    <!-- {{ haverR }} -->
                    <van-icon name="star-o" v-if="haverR.collect_status == 0" />
                    <van-icon color="rgb(244,206,83)" name="star" v-else />
                </div>
            </div>
            <div class="topic-name" v-if="haverR.collect_users">
                <span>{{ haverR.n }}</span>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name: 'ReComList',
    props: {
        recommendList: {

        }
    },
    data() {
        return {
            haverar: '',
            haver: ''
        }
    },
    created() {
        // console.log(this.recommendList)
    },
    computed: {
        haverAR() {
            if (this.recommendList.r) {
                if (!this.recommendList.r.a) {
                    this.haverar = JSON.parse(sessionStorage.getItem('recommendlist')).r.a
                } else {
                    this.haverar = this.recommendList.r.a
                }
            }
            return this.haverar
        },
        haverR() {
            if (this.recommendList.r) {
                if (!this.recommendList.r) {
                    this.haver = JSON.parse(sessionStorage.getItem('recommendlist')).r
                }
                else {
                    this.haver = this.recommendList.r
                }
            }
            // console.log(this.haver)
            return this.haver
        }
    },
    methods: {

    }
}
</script>
<style lang="less" scoped>
.recomlist {
    width: 100%;
    height: auto;

    .header {
        width: 100%;
        height: 50px;

        display: flex;

        .img {
            width: 50px;
            height: 50px;
            // background-color: pink;
            display: flex;
            align-items: center;
            justify-content: center;

            img {
                width: 40px;
                height: 40px;
                display: block;
                border-radius: 50%;
            }
        }

        .name {
            width: 250px;
            height: 50px;

            line-height: 50px;
            font-size: 16px;
            font-weight: 600;

        }

        .more {
            width: 70px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 20px;
            // background-color: pink;
        }


    }

    .section {
        width: 100%;
        height: auto;
        position: relative;

        img {
            display: block;
            width: 100%;
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
        margin-top: 10px;
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;

        .footer-top {
            width: 100%;
            height: 40px;
            display: flex;
            justify-content: space-between;

            .user-head {
                max-width: 30%;
                height: 100%;
                margin-left: 10px;

                ul {
                    width: 100%;
                    height: 100%;
                    display: flex;

                    li {
                        width: 20%;
                        height: 100%;

                        img {
                            display: block;
                            border: 1px solid #999;
                            width: 30px;
                            height: 30px;
                            border-radius: 50%;
                        }
                    }
                }
            }

            .collect-count {
                width: 190px;
                height: 100%;
                line-height: 40px;

            }

            .collect {
                width: 60px;
                height: 100%;
                text-align: center;
                line-height: 40px;
                font-size: 20px;
                // background-color: pink;
            }
        }

        .topic-name {
            box-sizing: border-box;
            padding: 5px;
            width: 100%;
            height: auto;


            span {
                margin-left: 5px;
            }

        }
    }
}
</style>