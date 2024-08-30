<template>
    <div class="home">
        <van-sticky>
            <div class="homt_header">
                <div class="add" @click="gotopush"><van-icon name="add" color="rgb(247,205,85)" /></div>
                <div class="search">
                    <div class="search-box" @click="$router.push({name: 'Search'})">
                        <van-icon name="search" /><input type="text" placeholder="输入你喜欢的内容把"/>
                    </div>

                </div>
                <div class="more-btn">
                    <span><van-icon name="bars" /></span>
                    <span><van-icon name="chat-o" /></span>
                </div>
            </div>
        </van-sticky>

        <div class="bbox">
            <van-tabs v-model="activeName" @click="Onclick">
                <van-tab v-for="(item, index) in initDate.tabs" :name="isNaN(Number(item.id)) ? item.id : item.url"
                    :title="item.title">

                    <router-view></router-view>

                </van-tab>
            </van-tabs>
        </div>

    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'Home',
    data() {
        return {
            activeName: this.$store.state.tabCurrent,
            initDate: '',
            container: null,
        }
    },
    computed: {
        ...mapState(['tabCurrent','isLogin'])
    },
    created() {
        this.getConfig()
        this.Onclick()
    },
    methods: {
        getConfig() {
            this.axios({
                method: 'get',
                url: 'https://apis.netstart.cn/douguo/config.json'
            }).then(res => {

                if (res.data.result) {
                    this.initDate = res.data.result.hometabs
                    // console.log(this.initDate)
                }
            })
        },
        Onclick() {
            // console.log(this.activeName)
            if (this.activeName.includes('http')) {
                window.location.href = this.activeName
            }
            else {
                this.$router.push({
                    name: this.activeName
                })
                this.updateTabCurrent(this.activeName)
            }

        },
        gotopush() {
            if(this.isLogin) {
                this.$router.push({name: 'push'})
            }else {
                this.$toast('请先登录')
            }
        },
        ...mapMutations(['updateTabCurrent'])
    }
}
</script>
<style lang="less" scoped>
.home {
    width: 100vw;
    height: auto;
    touch-action: none;



    .homt_header {
        width: 100%;
        height: 50px;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;

        .add {
            font-size: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 15%;
            height: 100%;
        }

        .search {
            width: 65%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            // background-color: skyblue;

            .search-box {
                width: 100%;
                height: 80%;
                display: flex;
                background-color: rgb(246, 246, 246);
                align-items: center;
                justify-content: center;

                .van-icon {
                    margin-left: 5px;
                    font-size: 20px;
                }

                input {
                    height: 90%;
                    width: 210px;
                    border: 0;
                    outline: none;
                    background-color: rgb(246, 246, 246);
                }
            }
        }

        .more-btn {
            width: 20%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;

            span {
                font-size: 30px;
            }
        }


    }

    .bbox {
        position: fixed;
        top: 50px;
        width: 100%;
        height: 200px;

        /deep/ .van-tabs .van-tabs__line {
            background-color: rgb(246, 198, 85);
        }

    }
}
</style>