<template>
    <div class="push">
        <div class="head">
            <van-icon name="cross" @click="$router.go(-1)"/>
            <div class="time">
                <div class="week">
                    <span>{{ week }}</span>
                    <br>
                    <span>{{ m }} / {{ y }}</span>
                </div>
                <div class="day">{{ d }}</div>
            </div>
        </div>
        <div class="text">
            <span style="color: rgb(102,102,102);font-size: 15px"> 燃起来!太太乐冬日火锅盛宴邀您来涮 <van-icon name="arrow" /></span>
            <br>
            <br>
            <span style="color: #999">活动专区参与#太太乐沸腾火锅节#，共享火锅带来的美好瞬间，用食力，赢大奖</span>
        </div>
        <div class="container">
            <ul>
                <li @click="gotopushpage" style="background-color: rgb(185,203,181);color: rgb(85,126,70)">
                    <h1>发布菜谱</h1>
                    <van-skeleton title :row="5" />
                </li>
                <li style="background-color: rgb(249,226,156);color: rgb(197,165,80)">
                    <h1>发布笔记</h1>
                    <van-skeleton title :row="5" />
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Push',
    data() {
        return {
            week: '',
            y: '',
            m: '',
            d: '',
            weekArr: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        }
    },
    computed: {
        ...mapState(['isLogin'])
    },
    created() {
        this.startTime()
    },
    methods: {
        startTime() {
            let date = new Date()
            let m = date.getMonth() + 1
            let d = date.getDate()
            let y = date.getFullYear()
            let weekIndex = date.getDay()

            m > 10 ? m : '0' + m
            d > 10 ? d : '0' + d

            this.week = this.weekArr[weekIndex]
            this.m = m
            this.d = d
            this.y = y
        },
        gotopushpage() {
            if(this.isLogin) {
                this.$router.push({name: 'pushpage'})
            }
            else {
                this.$toast('请先登录')
            }
        }
    }
}
</script>
<style lang="less" scoped>
.push {
    width: 100%;
    height: auto;

    .head {
        width: 100%;
        height: 50px;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        // background-color: pink;
        align-items: center;
        justify-content: space-between;

        .van-icon {
            font-size: 20px;
            font-weight: 700;
        }

        .time {
            width: 120px;
            display: flex;
            align-items: center;
            justify-content: space-between;

            .week {
                font-size: 16px;
                font-weight: 600;
            }


            .day {
                font-size: 30px;
                font-weight: 900;
            }
        }
    }

    .text {
        margin-top: 100px;
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        height: auto;
    }

    .container {
        margin-top: 20px;
        width: 100%;
        height: auto;

        ul {
            box-sizing: border-box;
            padding: 10px;
            width: 100%;
            height: auto;
            display: flex;
            justify-content: space-between;

            li {
                width: 48%;
                height: 250px;      
                border-radius: 15px;

             text-align: center;
            }
        }
    }
}
</style>