<template>
    <div class="notebook" v-if="nodebookList.note" ref="notebook">
        <div class="header">
            <div class="left" @click="$router.go(-1)"><van-icon name="arrow-left" /></div>
            <div class="center">
                <div class="img" v-if="nodebookList.note">
                    <img :src="nodebookList.note.author.p" alt="">
                </div>
                <div class="name" v-if="nodebookList.note">
                    <span>{{ nodebookList.note.author.n }}</span>&nbsp;&nbsp;<span
                        style=" color: rgb(186,164,90) ; font-style: italic;">lv{{ nodebookList.note.author.lvl
                        }}</span>
                    <br>
                    <span style="color: #999;">{{ nodebookList.note.straight_text }}</span>
                </div>
                <div class="btn">
                    <van-button @click="primse(nodebookList.note.author)" round type="info"
                        v-if="!renderLike">关注</van-button>

                    <van-button v-else round type="info" @click="primse(nodebookList.note.author)"
                        style="color: rgb(162,162,162);background-color: rgb(245,245,245);">已关注</van-button>
                </div>
            </div>
            <div class="right"><van-icon name="weapp-nav" /></div>
        </div>

        <div class="section" v-if="nodebookList.note">
            <van-swipe @change="onChange">
                <van-swipe-item v-for="item in nodebookList.note.images">
                    <img :src="item.u" alt="">
                </van-swipe-item>
                <template #indicator>
                    <div class="custom-indicator">{{ current + 1 }}/{{ nodebookList.note.images.length }}</div>
                </template>
            </van-swipe>
        </div>
        <div class="content" v-if="nodebookList.note">
            <div class="title">{{ nodebookList.note.title }}</div>
            <div class="url">
                <span v-for="val in nodebookList.note.commercial_topic" style="color: #ffb31a;">#{{ val.name }}</span>
            </div>
            <div class="contents_s" v-if="nodebookList.note.contents">
                <ul v-if="nodebookList.note.contents[0]">
                    <li :style="`color: ${nodebookList.note.contents[0].color}`" v-for="item in renderdesc0"> {{ item }}
                    </li>
                </ul>
                <ul v-if="nodebookList.note.contents[1]">
                    <li :style="`color: ${nodebookList.note.contents[1].color}`" v-for="item in renderdesc1">{{ item }}
                    </li>
                </ul>
                <span v-if="nodebookList.note.contents[2]" :style="`color: ${nodebookList.note.contents[2].color}`">
                    #{{ nodebookList.note.contents[2].c
                    }}</span>
            </div>
        </div>
        <div class="time">
            <div class="time_left">
                <span>{{ nodebookList.note.publishtime }}</span><span v-if="nodebookList.note.cs[0]">·{{
                        nodebookList.note.cs[0].at
                }}</span>
            </div>
            <div class="time-right">
                <span>{{ nodebookList.note.like_count }}次点赞</span>
            </div>
        </div>
        <div class="related">
            <div class="topic">相关笔记</div>
            <div class="masonry">
                <div class="container" v-for="item in relateList" @click="relachoose(item)">
                    <RelativeBookList :list="item"></RelativeBookList>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="input"><input type="text" placeholder="说点什么..."></div>
            <div class="icon">
                <ul>
                    <li><van-icon name="chat-o" size="25" />&nbsp;评论</li>
                    <li><van-icon name="star-o" size="25" />&nbsp;收藏</li>
                    <li><van-icon name="like-o" size="25" />&nbsp;点赞</li>
                </ul>
            </div>
        </div>
        <div class="dianzi" style="height: 10vh"> </div>
    </div>
</template>
<script>
import RelativeBookList from '../components/RelateBookList.vue'
import { mapState } from 'vuex'
export default {
    name: 'NoteBook',
    components: {
        RelativeBookList,
    },
    data() {
        return {
            nodebookList: '',
            current: 0,
            relateList: '',
        }
    },
    created() {
        let id = this.$route.params.id
        this.getNode(id)
        this.getRelated(id)
    },
    computed: {
        renderdesc0() {
            let arr
            if (this.nodebookList.note) {
                // console.log(this.nodebookList.note.contents[1].c)
                arr = this.nodebookList.note.contents[0].c.split('\n')
                // console.log(arr)
            }
            return arr
        },
        renderdesc1() {
            let arr
            if (this.nodebookList.note) {
                // console.log(this.nodebookList.note.contents[1].c)
                arr = this.nodebookList.note.contents[1].c.split('\n')
                // console.log(arr)
            }
            return arr
        },
        renderLike() {
            if (this.isLogin) {
                if (this.nodebookList.note.author) {
                    let fv = JSON.parse(localStorage.getItem('likeuserId'))
                    let res = fv.some(val => {
                        return val == this.nodebookList.note.author.id
                    })

                    if (res) {
                        this.nodebookList.note.author.is_prime = true
                    } else {
                        this.nodebookList.note.author.is_prime = false
                    }

                }
            }


            return this.nodebookList.note.author.is_prime
        },
        ...mapState(['isLogin'])
    },
    methods: {
        getNode(id) {
            this.axios({
                method: 'get',
                url: `https://apis.netstart.cn/douguo/note/detail/${id}`
            }).then(res => {
                if (res.status === 200) {
                    this.nodebookList = res.data.result
                    // console.log(this.nodebookList)
                }
            })
        },
        getRelated(id) {
            this.axios({
                method: 'get',
                url: `https://apis.netstart.cn/douguo/note/related/${id}/0/20`
            }).then(res => {
                if (res.data.state == "success") {
                    this.relateList = res.data.result.list
                    // console.log(this.relateList)
                }
            })
        },

        onChange(index) {
            this.current = index;
        },
        relachoose(item) {

            this.getNode(item.note.id)
            this.getRelated(item.note.id)

            window.addEventListener('scroll', this.handerllScrollTop)
            if (window.pageYOffset) {
                window.pageYOffset = 0
            }
            if (document.documentElement.scrollTop) {
                document.documentElement.scrollTop = 0
            }
        },
        handerllScrollTop() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            // console.log(scrollTop)
        },
        primse(item) {
            if (this.isLogin) {
                let likeuser = JSON.parse(localStorage.likeuserId)
                item.is_prime = !item.is_prime

                if (item.is_prime) {
                    likeuser = [
                        item.id,
                        ...likeuser
                    ]

                    localStorage.likeuserId = JSON.stringify(likeuser)
                }
                else if (!item.is_prime) {
                    likeuser = likeuser.filter(val => {
                        return val != item.id
                    })

                    localStorage.likeuserId = JSON.stringify(likeuser)
                }
            }
            else {
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
.notebook {
    width: 100%;
    height: auto;

    .header {

        width: 100%;
        height: 50px;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        background-color: white;
        align-items: center;
        z-index: 2;

        .left {
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 30px;
        }

        .center {
            width: 270px;
            height: 50px;

            display: flex;
            align-items: center;


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

            .name {
                width: 130px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
                height: 40px;

            }


            .btn {
                width: 80px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;

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
            width: 50px;
            height: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;

        }


    }

    .section {
        margin-top: 50px;
        width: 100%;
        height: auto;
        position: relative;

        .van-swipe {

            width: 100%;
            height: auto;

            .van-swipe-item {
                width: 100%;
                height: auto;

                img {
                    width: 100%;
                    max-height: 451px;
                    min-height: 451px;
                    display: block;
                }
            }


        }

        .custom-indicator {
            position: absolute;
            right: 5px;
            bottom: 5px;
            padding: 2px 5px;
            font-size: 12px;
            color: white;
            background: rgba(0, 0, 0, 0.1);
        }


    }

    .content {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 10px;

        .title {
            width: 100%;
            height: auto;
            font-size: 20px;
            font-weight: 600;
        }

        .url {
            margin-top: 5px;
            width: 100%;
            height: 20px;
            line-height: 20px;
        }


        .contents_s {
            width: 100%;
            height: auto;
            font-size: 16px;
            line-height: 25px;
        }


    }

    .time {
        width: 100%;
        height: 20px;
        display: flex;
        box-sizing: border-box;
        padding: 10px;
        justify-content: space-between;
        color: #999;
    }

    .related {
        .topic {
            margin-top: 5px;
            width: 100%;
            height: 30px;
            font-size: 16px;
            font-weight: 600;
            box-sizing: border-box;
            padding: 10px;
            line-height: 15px;
            position: sticky;
            top: 50px;
            background-color: white;
            z-index: 2;
        }

        .masonry {
            width: 95%; // 默认宽度
            margin: 10px auto; // 剧中
            columns: 2; // 默认列数
            column-gap: 10px; // 列间距
            border-radius: 15px;
            // background-color: pink;


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


}
</style>