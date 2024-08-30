<template>
    <div class="myfriend">
        <div class="header">
            <van-icon name="arrow-left" size="20" @click="$router.go(-1)" />
        </div>
        <div class="list" v-if="$store.state.isLogin">
            <ul v-if="lisData.length > 0">
                <li v-for="(item, index) in lisData">
                    <div class="img" @click="userids(item)">
                        <img :src="item.user_photo" alt="">
                    </div>
                    <div class="name">{{ item.nick }}</div>
                    <div class="btn">
                        <van-button @click="choose(item)" round type="info" v-if="!item.is_prime">关注</van-button>
                        <van-button @click="choose(item)" v-else round type="info"
                            style="color: rgb(162,162,162);background-color: rgb(245,245,245);">已关注</van-button>
                    </div>
                </li>
            </ul>
            <h1 v-else>还没有关注噢</h1>
        </div>
        <h1 v-else>暂未登录</h1>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'MyFriend',
    data() {
        return {
            lisData: []
        }
    },
    computed: {
        ...mapState(['isLogin'])
    },
    created() {
        let likeuserId = JSON.parse(localStorage.getItem('likeuserId'))
        likeuserId.forEach(item => {
            this.getProductDetailByPid(item)
        })
    },
    methods: {
        getProductDetailByPid(pid) {
            this.axios({
                method: "get",
                url: `https://apis.netstart.cn/douguo/user/info/${pid}`,
            }).then((res) => {
                if (res.data) {
                    this.lisData.push(res.data.result.user);
                    // console.log(this.lisData)
                }
            }).then(() => {
                if (this.isLogin) {
                    if (this.lisData) {
                        let fv = JSON.parse(localStorage.getItem('likeuserId'))
                        for (let i = 0; i < this.lisData.length; i++) {
                            for (let j = 0; j < fv.length; j++) {
                                if (this.lisData[i].user_id == fv[j]) {
                                    this.lisData[i].is_prime = true
                                }
                            }
                        }

                    }
                }
            });
        },
        userids(item) {
            this.$router.push({
                name: 'Userid',
                params: {
                    userid: item.user_id
                }
            })
        },
        choose(item) {
            if (this.isLogin) {
                let locMylike = JSON.parse(localStorage.getItem('likeuserId'))
                item.is_prime = !item.is_prime

                if (item.is_prime) {
                    locMylike = [
                        item.user_id,
                        ...locMylike
                    ]

                    localStorage.likeuserId = JSON.stringify(locMylike)
                }
                else if (!item.is_prime) {
                    locMylike = locMylike.filter(val => {
                        return val != item.user_id
                    })

                    localStorage.likeuserId = JSON.stringify(locMylike)
                }


            } else {
                this.$toast({
                    message: '请先登录'
                })
                item.is_prime = false
            }
        }
    }
}
</script>
<style lang="less" scoped>
.myfriend {
    width: 100%;
    height: auto;

    .header {
        margin-top: 5px;
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        height: 30px;
        display: flex;
        align-items: center;
    }

    .list {
        width: 100%;
        height: auto;

        ul {
            padding: 10px;
            box-sizing: border-box;
            width: 100%;
            height: auto;

            li {
                margin-bottom: 10px;
                width: 100%;
                height: auto;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .img {
                    width: 50px;
                    height: auto;


                    img {
                        width: 100%;
                        height: auto;
                        display: block;
                        border-radius: 50%;
                    }

                }

                .name {
                    width: 180px;
                    height: auto;
                }

                .btn {
                    width: 80px;
                    height: 30px;

                    .van-button {
                        width: 80px;
                        height: 30px;
                        padding: 5px;
                        background-color: rgb(247, 205, 84);
                        border: 0;
                        color: black;
                    }
                }


            }
        }

        h1 {
            width: 90%;
            margin: 0 auto;
        }
    }

    h1 {
        width: 90%;
        margin: 0 auto;
    }
}
</style>