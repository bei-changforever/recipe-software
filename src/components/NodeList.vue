<template>
    <div class="nodelist">

        <div class="item">
            <img class="auto-img" :src="NoList.note.image_u" />
            <h2>{{ NoList.note.title }}</h2>
            <div class="user">
                <div class="img">
                    <img :src="NoList.note.author.p">
                </div>
                <div class="name">
                    <span>{{ NoList.note.author.n }}</span>
                </div>
                <div class="icon"><van-icon name="like-o" />赞</div>
            </div>
        </div>
        
    </div>

</template>
<script>
export default {
    name: 'NodeList',
    props: {
        NoList: {}
    },
    data() {
        return {

        }
    },
    created() {
        // console.log(this.NoList)
    },
    computed: {

    }
}
</script>
<style lang="less" scoped>
.nodelist {
    width: 100%;
    height: auto;


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

        .img {
            width: 30px;
            height: 30px;

            img {
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