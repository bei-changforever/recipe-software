<template>
    <div class="notes">
        <div class="top_swiper">
            <div class="first">
                <van-swipe :loop="false" :show-indicators="false" :width="120">
                    <van-swipe-item v-for="(item, index) in topics[0]">
                        <van-button round type="info">#{{ item.name }}</van-button>
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="second">
                <van-swipe :loop="false" :show-indicators="false" :width="120">
                    <van-swipe-item v-for="(item, index) in topics[1]"> <van-button round type="info">#{{ item.name
                    }}</van-button></van-swipe-item>
                </van-swipe>
            </div>

        </div>
        <div class="masonry">
            <div class="container" v-for="item in list" @click="choose(item)">
                <NoteList :no-list="item"></NoteList>
            </div>
        </div>
        <div class="dainzi" style="height: 10vh"></div>
    </div>
</template>
<script>
import NoteList from '../components/NodeList.vue'
export default {
    name: 'Notes',
    components: {
        NoteList
    },
    data() {
        return {
            topics: '',
            list: ''
        }
    },
    created() {
        this.getNotes()
    },
    methods: {
        getNotes() {
            this.axios({
                method: 'get',
                url: 'https://apis.netstart.cn/douguo/home/notes/0/20'
            }).then(res => {
                if (res.status == 200) {
                    this.topics = res.data.result.topics
                    this.list = res.data.result.list
                    this.list = res.data.result.list.filter(item => {
                        return item.note
                    })
                    sessionStorage.setItem('nodelist', JSON.stringify(this.list))
                    // console.log(this.list)
                }
            })
        },
        choose(item) {
            // console.log(item)
            this.$router.push({
                name: 'NoteBook',
                params: {
                    id: item.note.id
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
.notes {
    width: 100%;
    height: 600px;
    overflow-y: scroll;
    overflow-x: hidden;
    box-sizing: border-box;

    .top_swiper {
        width: 100%;
        height: 100px;
        // background-color: pink;

        .first {
            width: 100%;
            height: 50px;

            .van-swipe .van-swipe-item {
                height: 50px;

                // background-color: skyblue;
                display: flex;
                align-items: center;
                justify-content: center;

                .van-button {

                    min-width: 90px;
                    height: 40px;
                    padding: 5px;
                    background-color: rgb(242, 251, 250);
                    border: 0;
                    color: rgb(104, 149, 149);
                    font-weight: 600;
                }
            }
        }

        .second {
            width: 100%;
            height: 50px;

            .van-swipe .van-swipe-item {
                height: 50px;

                // background-color: skyblue;
                display: flex;
                align-items: center;
                justify-content: center;

                .van-button {

                    min-width: 90px;
                    height: 40px;
                    padding: 5px;
                    background-color: rgb(242, 251, 250);
                    border: 0;
                    color: rgb(104, 149, 149);
                    font-weight: 600;
                }
            }
        }
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
</style>