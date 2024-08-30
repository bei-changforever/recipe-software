<template>
    <div class="my">
        <div class="head">
            <img @click="sz" src="../assets/images/setting.png" alt="" class="img1" />

            <div class="head-list">
                <img src="../assets/images/ring.png" alt="" class="img3" />
                <img src="../assets/images/share.png" alt="" class="img2" />
            </div>
        </div>

        <div class="ggg">
            <div class="head-box">
                <div class="img">
                    <img :src="selfITEMS[0].picUrl" />
                </div>
            </div>
            <div class="name">
                <h3>{{ selfITEMS[0].name }}</h3>
                <p class="dengji">LV.{{ selfITEMS[0].lv }}</p>
                <div class="ziliao">✎ 补全资料 +1000经验值</div>
            </div>
        </div>
        <h3>我是大神 豆龄30年 IP属地广东省</h3>
        <p class="jieshao">吃货不是在吃就是去吃的路上,没时间写签名</p>
        <div class="num-box">
            <span @click="seeMyFriend">
                <p class="num" v-if="!renderPrimise">0</p>
                <p class="num" v-else>{{ renderPrimise }}</p>
                <p class="text">关注</p>
            </span>
            <span>
                <p class="num">0</p>
                <p class="text">粉丝</p>
            </span>
            <span>
                <p class="num">100万</p>
                <p class="text">被收藏</p>
            </span>
            <span>
                <p class="num">300万</p>
                <p class="text">被学做</p>
            </span>
            <span>
                <p class="num">99999万</p>
                <p class="text">经验值</p>
            </span>
        </div>
        <div class="vip">
            <div class="vip-item">
                <img class="img1" src="../assets/images/yellow.png" alt="" />
                <div class="div2">
                    <p class="p1">尊享vip卡</p>
                    <p class="p2">科学饮食轻松带你瘦 &gt;</p>
                </div>
            </div>
            <div class="s">|</div>
            <div class="vip-item1">
                <img class="img2" src="../assets/images/many.png" alt="" />
                <div class="div3">
                    <p class="p1">签到领钱</p>
                    <p class="p2">做任务赢赏金 &gt;</p>
                </div>
            </div>
        </div>

        <div class="page-item">
            <van-grid :border="false">
                <van-grid-item icon="desktop-o" text="创作者中心" />
                <van-grid-item icon="label-o" text="草稿箱" />
                <van-grid-item icon="vip-card-o" text="专属客服" />
                <van-grid-item icon="points" text="厨具管理" />
                <van-grid-item icon="clock-o" text="最近浏览" />
                <van-grid-item icon="bag-o" text="采购清单" />
                <van-grid-item icon="comment-o" text="电子书" />
                <van-grid-item icon="balance-o" text="钱包" />
            </van-grid>
        </div>
       <h1 >我发布的内容</h1>
        <div class="masonry" v-if="isLogin">
            <div class="item" v-for="item in imgBase64">
                <img class="auto-img" :src="item.imginfo[0].url" />
                <h2>
                    {{ item.desc }}
                </h2>
                <div class="user">
                    <div class="sssimg">
                        <img class="sss" :src="selfITEMS[0].picUrl">
                    </div>
                    <div class="name">
                        <span>{{ selfITEMS[0].name }}</span>
                    </div>
                    <div class="icon"><van-icon name="like-o" />赞</div>
                </div>
            </div>
        </div>

        <div class="dianzi" style="height: 10vh"></div>

    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'My',
    computed: {
        renderPrimise() {
            let res = JSON.parse(localStorage.getItem('likeuserId')).length
            return res
        },
        ...mapState(['isLogin', 'selfITEMS', 'imgBase64'])
    },
    methods: {
        sz() {
            this.$router.push({
                name: "setting",
            });
        },
        seeMyFriend() {
            if (this.isLogin) {
                this.$router.push({
                    name: 'MyFriend'
                })
            }
        }
    }
}
</script>
<style lang="less" scoped>
.ggg {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px 0px 10px;
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
    margin-top: 20px;
    margin-left: 10px;
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
    margin-top: -10px;
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
    color: #ccc;
    margin-left: 10px;
    margin-top: -8px;
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
h1 {
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
}
.vip {
    width: 94%;

    margin: 0 auto;
    height: 60px;
    background: #424242;
    border-radius: 10px 10px 10px 10px;
    padding: 5px;
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

.masonry {
    width: 95%; // 默认宽度
    margin: 10px auto; // 剧中
    columns: 2; // 默认列数
    column-gap: 10px; // 列间距
    border-radius: 15px;
    // background-color: pink;


    .item {
        padding: 5px;
        width: 95%;
        border-radius: 15px;
        break-inside: avoid;
        margin-bottom: 10px;
        background-color: white;
    }

    .item .auto-img {
        width: 100%;
        display: block;
        border-radius: 15px;
    }

    .user {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: space-between;

        .sssimg {
            width: 30px;
            height: 30px;

            .sss {
                width: 100%;
                display: block;
                border-radius: 50%;
            }
        }

        .name {
            min-width: 100px;
            height: 30px;
            line-height: 30px;
            color: #999;
            margin-left: 5px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .icon {
            width: 50px;
            height: 30px;
            line-height: 30px;
            font-size: 16px;
        }
    }
}
</style>