<template >
    <div class="search">
        <div class="header">
            <div class="left" @click="goback"><van-icon name="arrow-left" /></div>
            <div class="input">
                <div class="search-box">
                    <van-icon name="search" />
                    <input type="text" v-model="searchKey" placeholder="输入关键字或者菜名" @keyup="search" />
                    &nbsp;
                    <van-icon name="close" @click="clear" />
                </div>

            </div>
            <div class="sou" @click="getsearch">搜索</div>
        </div>

        <div class="suggest" v-if="!hot && searchKey">
            <ul>
                <li v-for="(item, index) in SearchSuggests" @click="suggestClick(item.name)">
                    <span>{{ item.name }}</span>
                    <van-tag v-if="item.tag" :style="`color:${item.tag.text_color};background-color:${item.tag.background_color
                    }`">{{ item.tag.name }}</van-tag>
                </li>
            </ul>
        </div>

        <div class="content" v-if="!hot && !searchKey">
            <div class="searchHistory">
                <div class="searchSpan_top">
                    <span class="searchSpan" v-if="(keyWorldList.length != 0)">搜索历史</span>
                    <span class="searchSpan" v-else>暂无搜索历史</span>
                    <span class="icon">
                        <van-icon name="delete-o" v-if="(keyWorldList.length != 0)" @click="delHistory" />
                    </span>
                </div>

                <span class="spanKey" v-for="(item, index) in keyWorldList" :key="index" @click="chooseHistory(item)">{{
                        item
                }}</span>
            </div>
            <div class="hotsearch">
                <div class="topic">热门搜索</div>
                <span  class="hot-spanKey" v-for="item in suggestdetails"
                    :style="`color:${item.color};background-color: ${item.background_color}`" @click="chooseHot(item.title)">{{
                            item.title
                    }}</span>
            </div>
        </div>

        <div class="searchPage" v-if="hot">
            <router-view></router-view>
        </div>



        <div class="dianzi" style="height: 10vh"></div>
    </div>
</template>
<script>
import CaiPuList from '../components/caipulist.vue'

export default {
    name: 'Search',
    data() {
        return {
            suggestdetails: '',
            //函数防抖定时器序号
            timer: null,
            keyWorldList: [],
            searchKey: "",
            show: true,
            SearchSuggests: '',
            hot: false
        }
    },
    components: {
        CaiPuList,

    },
    created() {
        this.getHotSearch()
    },
    mounted() {
        this.keyWorldList = JSON.parse(localStorage.getItem("keyWorldList")) ? JSON.parse(localStorage.getItem("keyWorldList"))
            : [];
    },
    methods: {
        getHotSearch() {
            this.axios({
                method: 'get',
                url: 'https://apis.netstart.cn/douguo/recipe/search/hot'
            }).then(res => {
                if (res.status === 200) {
                    this.suggestdetails = res.data.result.suggestdetails
                }
            })
        },
        getSearchSuggests() {
            this.axios({
                method: 'get',
                url: `https://apis.netstart.cn/douguo/recipe/search/suggests?kw=${this.searchKey}`
            }).then(res => {
                if (res.status === 200) {
                    this.SearchSuggests = res.data.result.suggests
                    // console.log(this.SearchSuggests)
                }
            })
        },
        search() {

            if (this.searchKey !== '') {
                this.keyWorldList.unshift(this.searchKey)
                this.keyWorldList = [...new Set(this.keyWorldList)]

                //函数防抖控制触发频率
                if (this.timer) {
                    clearTimeout(this.timer);
                }

                this.timer = setTimeout(() => {
                    this.timer = null;
                    // console.log('函数防抖控制触发频率');
                    this.getSearchSuggests()
                    localStorage.setItem('keyWorldList', JSON.stringify(this.keyWorldList))
                }, 1000)

            }
        },

        getsearch() {
            if (!this.searchKey) {
                return
            }
            else {
                this.$router.push({
                    name: "searchPage",
                    query: {
                        name: this.searchKey,
                    },
                });
                this.hot = true
            }
        },
        suggestClick(suggestName) {
            this.searchKey = suggestName
            this.$router.push({
                name: "searchPage",
                query: {
                    name: suggestName,
                },
            });
            this.hot = true
        },
        delHistory() {
            localStorage.removeItem("keyWorldList");
            this.keyWorldList = [];
        },
        clear() {
            this.searchKey = ''
            this.SearchSuggests = ''
            this.hot = false
        },
        goback() {
            this.searchKey = ''
            this.$router.go(-1)
            this.hot = false
        },
        chooseHistory(item) {
            this.searchKey = item
            this.$router.push({
                name: "searchPage",
                query: {
                    name: item,
                },
            });
            this.hot = true
        },
        chooseHot(item) {
            this.searchKey = item
            this.$router.push({
                name: "searchPage",
                query: {
                    name: item,
                },
            });
            this.hot = true
        }
    }
}
</script>
<style lang="less" scoped>
.search {
    width: 100%;
    height: auto;

    .header {
        width: 100%;
        height: 50px;
        display: flex;
        position: sticky;
        top: 0;
        background-color: white;
        z-index: 2;

        .left {
            width: 50px;
            height: 50px;
            font-size: 20px;
            text-align: center;
            line-height: 50px;
        }

        .input {
            width: 270px;
            height: 50px;

            display: flex;
            justify-content: center;
            align-items: center;

            .search-box {
                width: 95%;
                height: 30px;
                background-color: rgb(245, 246, 248);
                font-size: 16px;

                input {

                    width: 80%;
                    height: 30px;
                    outline: none;
                    border: 0;
                    border-radius: 25px;
                    background-color: rgb(245, 246, 248);

                }
            }


        }

        .sou {
            width: 50px;
            height: 50px;
            font-size: 20px;
            text-align: center;
            line-height: 50px;
        }
    }

    .before {
        width: 100%;
        height: auto;

        /deep/ .van-tabs .van-tabs__line {
            background-color: rgb(246, 198, 85);
        }

        .container {
            width: 100%;
            height: auto;
        }
    }

    .suggest {
        width: 100%;
        height: auto;

        ul {
            box-sizing: border-box;
            padding: 10px;
            width: 100%;
            height: auto;

            li {
                margin-bottom: 5px;
                width: 100%;
                height: 30px;
                border-bottom: 1px solid rgb(245, 246, 248);
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }

    .searchHistory {
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        position: relative;

        .searchSpan_top {
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: space-between;

            .searchSpan {
                font-weight: 700;
            }

            .icon {
                font-size: 18px;
                font-weight: 700;
            }
        }


        .spanKey {
            padding: 0.1rem 0.2rem;
            background-color: #FAFAFA;
            border-radius: 0.4rem;
            margin: 0.1rem 0.2rem;
            display: inline-block;
        }
    }

    .hotsearch {
        padding: 10px;
        box-sizing: border-box;
        width: 100%;
        position: relative;

        .topic {
            width: 100%;
            height: 20px;
            display: flex;
            justify-content: space-between;
            font-weight: 700;
        }

        .hot-spanKey {
            padding: 0.1rem 0.2rem;
            background-color: #FAFAFA;
            border-radius: 0.4rem;
            margin: 0.1rem 0.2rem;
            display: inline-block;
        }
    }
}
</style>