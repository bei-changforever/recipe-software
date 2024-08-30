<template >
    <div class="caipu" v-if="recipe.user">
        <div class="header" :style="toggleColor ? 'background-color: white;' : 'background-color: transparent;'">
            <div class="left" @click="$router.go(-1)"><van-icon :color="toggleColor ? 'black' : 'white'"
                    name="arrow-left" /></div>
            <div class="center" v-if="toggleColor">
                <div class="img" v-if="recipe.user" @click="userids(recipe)">
                    <img :src="renderUSER.user_photo" alt="">
                </div>
                <div class="name" v-if="recipe.user">{{ renderUSER.nickname }}</div>
                <div class="btn">
                    <van-button round type="info" v-if="!chooselike" @click="primse(recipe)">关注</van-button>
                    <van-button v-else round type="info"
                        style="color: rgb(162,162,162);background-color: rgb(245,245,245);"
                        @click="primse(recipe)">已关注</van-button>
                </div>
            </div>
            <div class="right">
                <ul>
                    <li><i :style="toggleColor ? 'color: black;' : 'color: white; '"
                            class="iconfont icon-pengyouquan"></i></li>
                    <li><i :style="toggleColor ? 'color: black;' : 'color: white; '" class="iconfont icon-weixin"></i>
                    </li>
                    <li><van-icon name="weapp-nav" :color="toggleColor ? 'black' : 'white'" /></li>
                </ul>
            </div>
        </div>
        <div class="banner">
            <img v-if="!recipe.vfurl" :src="recipe.photo_path" alt="">
            <video v-else controls :src="recipe.vfurl"></video>
        </div>
        <div class="content">
            <div class="title">
                <div class="title_top">
                    <span>{{ recipe.title }}</span>
                </div>
                <div class="title-desc">
                    <span>{{ recipe.cook_difficulty }}</span>·<span>收藏{{ recipe.dish_count }}</span>·<span>浏览{{
                            recipe.favo_counts
                    }}</span>·<span>{{ recipe.release_time }}</span>
                </div>
            </div>
            <div class="user">
                <div class="img" v-if="recipe.user" @click="userids(recipe)">
                    <img :src="renderUSER.user_photo" alt="">
                </div>
                <div class="name" v-if="recipe.user">
                    <span style="font-size: 16px;font-weight: 600;">{{ renderUSER.nickname }}</span>&nbsp;&nbsp;
                    <span style=" color: rgb(186,164,90) ; font-style: italic;">lv{{ recipe.user.lvl }}</span>
                </div>
                <div class="btn">
                    <div class="btn"> <van-button round type="info" v-if="!chooselike"
                            @click="primse(recipe)">关注</van-button>
                        <van-button v-else round type="info"
                            style="color: rgb(162,162,162);background-color: rgb(245,245,245);"
                            @click="primse(recipe)">已关注</van-button>
                    </div>
                </div>
            </div>
            <div class="topic">
                <div class="topic-box">
                    <span>{{ recipe.cookstory }}</span><br>
                    <span>{{ recipe.tips }}</span>
                </div>
            </div>
            <div class="major">
                <div class="major-topic">
                    <span style="font-size: 16px;font-weight: 600;">食材清单</span>
                    <span style="font-size: 12px;color: rgb(99,147,156);">添加采购清单</span>
                </div>
                <ul>
                    <li v-for="(item, index) in recipe.major">
                        <span style="font-size: 14px">{{ item.title }}</span>
                        <span style="font-size: 14px">{{ item.note }}</span>
                    </li>
                </ul>
            </div>
            <div class="cookstep">
                <div class="cookstep-top">
                    <span style="font-size: 16px;font-weight: 600;">烹饪步骤</span>
                    <span style="font-size: 12px;color: rgb(99,147,156);">点击图片进入烹饪模式</span>
                </div>
                <div class="step-box" v-for="(item, index) in recipe.cookstep">
                    <div class="step-top">
                        步骤{{ index + 1 }}/{{ recipe.cookstep.length - 1 }}
                    </div>
                    <div class="img">
                        <img :src="item.image" alt="">
                    </div>
                    <div class="desc">{{ item.content }}</div>
                </div>
            </div>
        </div>
        <div class="time">{{ recipe.create_time }}</div>
        <div class="chuanxue">
            <button>
                <div class="img">
                    <img src="../assets/images/camera.png" alt="" />
                </div>
                <div class="ddd">
                    传学做
                </div>

            </button>


        </div>
        <div class="footer">
            <div class="input"><input type="text" placeholder="说点什么..."></div>
            <div class="icon">
                <ul>
                    <li @click="toggleComment(recipe.cook_id)"><van-icon name="chat-o" size="25" />&nbsp;评论</li>
                    <li @click="star(recipe)" v-if="recipe.collect_status
                    == 0"><van-icon name="star-o" size="25" />&nbsp;收藏</li>
                    <li @click="star(recipe)" v-else> <van-icon name="star" size="25" color="red" />&nbsp;已收藏</li>

                    <li><i class="iconfont icon-zhaoxiangji" style="color: orange;font-size: 25px;"></i>&nbsp;传学做</li>
                </ul>
            </div>
        </div>
        <van-popup v-model="show" closeable close-icon-position="top-left" position="bottom" :style="{ height: '90%' }">
            <div class="comment_container">
                <Comment :key-list="keyList"></Comment>
            </div>

            <van-field v-model="keyword" center clearable placeholder="发送评论">
                <template #button>
                    <van-button size="small" round type="info" @click="send">发送</van-button>
                </template>
            </van-field>
        </van-popup>
        <div class="dianzi" style="height: 10vh"> </div>
    </div>
</template>
<script>
import Comment from '../components/Comment.vue'
import { mapState, mapMutations } from 'vuex'
export default {
    name: 'CaiPu',
    data() {
        return {
            recipe: '',
            toggleColor: false,
            haveUser_photo: '',
            show: false,
            keyword: '',
            keyList: []
        }
    },
    components: {
        Comment
    },
    created() {
        // console.log(this.$route)
        let id = this.$route.params.id
        this.getDetail(id)
        this.getComment(id)
        // this.getNutrient(id)
        window.addEventListener('scroll', this.handleScroll)
    },
    computed: {
        renderUSER() {
            if (!this.recipe.user.user_photo) {
                this.haveUser_photo = JSON.parse(sessionStorage.getItem('caipudetail')).user
            } else {
                this.haveUser_photo = this.recipe.user
            }
            // console.log(this.haveUser_photo)
            return this.haveUser_photo
        },
        chooselike() {
            if (this.isLogin) {
                if (this.recipe.user) {
                    let fv = JSON.parse(localStorage.getItem('likeuserId'))
                    let res = fv.some(val => {
                        return val == this.recipe.user.user_id
                    })

                    if (res) {
                        this.recipe.user.is_prime = true
                    } else {
                        this.recipe.user.is_prime = false
                    }

                }
            }

            return this.recipe.user.is_prime
        },
        ...mapState(['isLogin', 'commentId'])
    },
    methods: {
        getDetail(id) {
            this.axios({
                method: 'get',
                url: `https://apis.netstart.cn/douguo/recipe/detail/${id}`,
            }).then(res => {
                // console.log(res)
                if (res.status === 200) {
                    this.recipe = res.data.result.recipe
                    sessionStorage.setItem('caipudetail', JSON.stringify(this.recipe))
                    // console.log(this.recipe)

                }
            }).then(() => {
                let likelist = JSON.parse(localStorage.getItem('cookID'))

                let res = likelist.some(item => {
                    return this.recipe.cook_id == item
                })

                if (res) {
                    this.recipe.collect_status = 1
                }
                else {
                    this.recipe.collect_status = 0
                }
            })
        },
        getNutrient(id) {
            this.axios({
                method: 'get',
                url: `https://apis.netstart.cn/douguo/recipe/nutrient/${id}`
            }).then(res => {
                // console.log(res.data)
            })
        },
        getComment(id) {
            this.axios({
                method: 'get',
                url: `https://apis.netstart.cn/douguo/recipe/flatcomments/${id}/0/20`
            }).then(res => {
                // console.log(res)
            })
        },
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if (scrollTop < 179) {
                this.toggleColor = false
            }
            else if (scrollTop >= 179) {
                this.toggleColor = true
            }
            // console.log(scrollTop)
        },
        toggleComment(id) {
      

            // 点击回复 获取当前评论的id值
            this.updatecommentId(id)
            this.show = !this.show



            if (localStorage[`keycomlist_${this.commentId}`]) {
                console.log('存在');
                this.keyList = JSON.parse(localStorage[`keycomlist_${this.commentId}`])
            } else {
                let steArr = []
                localStorage[`keycomlist_${this.commentId}`] = JSON.stringify(steArr)
            }
        },
        userids(item) {
            let user_id = item.user.user_id

            // console.log(user_id)

            this.$router.push({
                name: 'Userid',
                params: {
                    userid: user_id
                }
            })

        },
        star(item) {
            if (this.isLogin) {
                let cookLike = JSON.parse(localStorage.cookID)
                if (item.collect_status == 0) {
                    // console.log('收藏')
                    item.collect_status = 1

                    cookLike = [
                        item.cook_id,
                        ...cookLike
                    ]

                    localStorage.cookID = JSON.stringify(cookLike)
                }

                else if (item.collect_status == 1) {
                    // console.log('取消收藏')
                    item.collect_status = 0

                    cookLike = cookLike.filter((val, index) => {
                        return val != item.cook_id
                    })

                    localStorage.cookID = JSON.stringify(cookLike)
                }
            }
            else {
                this.$toast({
                    message: '请先登录'
                })
                item.collect_status = 0
            }

        },
        primse(item) {
            if (this.isLogin) {
                let likeuser = JSON.parse(localStorage.likeuserId)
                item.user.is_prime = !item.user.is_prime

                if (item.user.is_prime) {
                    likeuser = [
                        item.user.user_id,
                        ...likeuser
                    ]

                    localStorage.likeuserId = JSON.stringify(likeuser)
                }
                else if (!item.user.is_prime) {
                    likeuser = likeuser.filter(val => {
                        return val != item.user.user_id
                    })

                    localStorage.likeuserId = JSON.stringify(likeuser)
                }
            } else {
                this.$toast({
                    message: '请先登录'
                })
                item.user.is_prime = false
            }


        },
        send() {
            //每次点开需要根据不同的userid渲染不同的评论数据,就需要点击的时候获得到当前点击的评论id

            if (!this.isLogin) {
                this.$toast({
                    message: '请先登录'
                })
            }
            else {
                if (this.keyword.length === 0) {
                    this.$toast({
                        message: '无内容'
                    })
                }
                else {
                    if (this.keyword !== '' && this.keyList.length <= 50) {
                        // this.keyList.unshift(replyObj)

                        // localStorage.setItem(`keycomlist_${this.commentId}`, JSON.stringify(this.keyList))
                        // this.keyword = ''

                        let time = new Date().toLocaleString()

                        let replyObj = {
                            //当前评论的Id
                            NowcommentId: this.commentId,
                            reply: [
                                {
                                    mes: this.keyword,
                                    Thattime: time
                                }
                            ]
                        }
                        // 定义一个变量 等于原 localStorage[`keycomlist_${this.commentId}`]中的数据
                        let getlocal = JSON.parse(localStorage[`keycomlist_${this.commentId}`])

                        getlocal = [
                            replyObj,
                            ...getlocal
                        ]

                        this.keyList = getlocal

                        localStorage[`keycomlist_${this.commentId}`] = JSON.stringify(getlocal)
                    }
                }
            }


            this.keyword = ''
        },
        ...mapMutations(['updatecommentId'])


    }
}
</script>
<style lang="less" scoped>
.caipu {
    width: 100%;
    height: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    .header {
        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        // background-color: transparent;

        .left {
            width: 50px;
            height: 50px;
            text-align: center;
            line-height: 50px;
            font-size: 30px;
            // background-color: orangered;
        }

        .center {
            display: flex;
            min-width: 100px;
            height: 50px;
            // background-color: orangered;
            align-items: center;
            justify-content: center;

            .img {
                width: 35px;
                height: 35px;

                img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                    display: block;
                }
            }

            .name {
                min-width: 50px;
                height: 35px;
                line-height: 35px;
                margin-right: 10px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
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


        .right {
            // background-color: orangered;
            width: 150px;
            height: 50px;

            ul {
                width: 100%;
                height: 100%;
                display: flex;

                li {
                    flex: 1;
                    text-align: center;
                    line-height: 50px;
                    font-size: 30px;

                    i {
                        font-size: 30px;
                    }
                }
            }
        }
    }

    .banner {
        width: 100%;
        height: auto;

        img {
            width: 100%;
            height: auto;
            display: block;
        }

        video {
            width: 100%;
            height: auto;
            object-fit: fill;
        }
    }

    .content {
        width: 100%;
        height: auto;

        &::-webkit-scrollbar {
            display: none;
        }

        .title {
            width: 100%;
            height: 100px;


            .title_top {
                width: 100%;
                height: 60px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                font-size: 25px;
                font-weight: 700;
                text-indent: 0.5em;
                letter-spacing: 2px;
                line-height: 60px;
            }

            .title-desc {
                width: 100%;
                height: 40px;

                font-size: 14px;
                color: #999;
                letter-spacing: 1px;
                text-indent: 1em;
            }
        }

        .user {
            width: 100%;
            height: 50px;
            // background-color: pink;
            display: flex;
            justify-content: space-around;

            .img {
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }

            .name {
                width: 220px;
                height: 100%;
                display: flex;
                line-height: 50px;
            }

            .btn {
                width: 70px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;

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

        .topic {
            width: 100%;
            height: auto;
            box-sizing: border-box;
            padding: 10px;

            .topic-box {

                width: 100%;
                height: auto;
                line-height: 30px;


                span {
                    font-size: 15px;
                }

            }

        }

        .major {
            width: 100%;
            height: auto;
            box-sizing: border-box;
            padding: 10px;

            .major-topic {
                width: 100%;
                height: 40px;
                background-color: white;
                position: sticky;
                top: 50px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            ul {
                width: 100%;
                height: auto;

                li {
                    width: 100%;
                    height: 30px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }
            }
        }

        .cookstep {
            width: 100%;
            height: auto;
            box-sizing: border-box;
            padding: 10px;

            .cookstep-top {
                width: 100%;
                height: 40px;
                background-color: white;
                position: sticky;
                top: 50px;

                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .step-top {
                width: 100%;
                height: 30px;
                line-height: 30px;
                background-color: white;
                position: sticky;
                top: 50px;
            }

            .img {
                width: 100%;
                height: auto;

                img {
                    width: 100%;
                    height: auto;
                    display: block;
                    border-radius: 15px;
                }
            }

            .desc {
                width: 100%;
                height: auto;
                 box-sizing: border-box;
                 padding: 10px 0;
                font-size: 15px;
            }


        }


    }

    .time {
        box-sizing: border-box;
        color: #999;
        padding: 10px;
        width: 100%;
        height: 20px;
        line-height: 20px;
    }

    .chuanxue {
        margin-top: 10px;
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;

        button {
            width: 95%;
            height: 40px;
            border: 0;
            border-radius: 25px;
            color: black;
            background-color: rgb(247, 205, 84);
            display: flex;
            align-items: center;
            justify-content: center;

            .img {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;

                img {
                    width: 30px;
                    height: 30px;
                    display: block;
                }
            }

            font-size: 18px;

        }
    }

    .footer {
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0;
        left: 0;
        display: flex;
        background-color: white;
        box-shadow: 0 -5px 10px rgb(245, 246, 248);

        .input {
            width: 30%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            // background-color: pink;

            input {
                border-radius: 25px;
                width: 80px;
                height: 30px;
                border: 0;
                outline: none;
                background-color: rgb(245, 246, 248);
                text-indent: 0.5em;
            }
        }

        .icon {
            width: 70%;
            height: 100%;

            ul {
                width: 100%;
                height: 100%;
                display: flex;

                li {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 16px;

                }
            }

        }
    }

    .van-popup {
        border-radius: 15px 15px 0 0;

        .comment_container {
            width: 100%;
            height: 540px;
            overflow: scroll;
        }


        .footer {
            position: fixed;
            bottom: 0;
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            input {
                text-indent: 1em;
                width: 95%;
                height: 35px;
                outline: none;
                border: 0;
                border-radius: 25px;
                background-color: rgb(245, 246, 248);
            }
        }
    }
}
</style>