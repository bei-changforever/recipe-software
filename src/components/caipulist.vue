<template>
    <div class="caipulist">
        <ul>
            <li>
                <div class="img">
                    <img :src="caipulist.r.p" alt="">
                </div>
                <div class="topic">
                    <div class="title">{{ caipulist.r.n }}</div>
                    <div class="count">{{ caipulist.r.recommendation_tag }}</div>
                    <div class="user">
                        <div class="img">
                            <img :src="caipulist.r.a.p" alt="">
                        </div>
                        <div class="name">
                            {{ caipulist.r.a.n }}
                        </div>

                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'CaiPuList',
    props: {
        caipulist: {}
    },
    created() {
        // console.log(this.caipulist)
    }
}
</script>
<style lang="less" scoped>
.caipulist {
    width: 100%;
    height: auto;

    ul {
        width: 100%;
        height: auto;

        li {
            padding: 10px;
            width: 100%;
            height: 100px;
            box-sizing: border-box;
            margin-bottom: 10px;
            display: flex;

            .img {
                width: 100px;
                height: 100px;
                margin-right: 10px;

                img {
                    width: 100px;
                    height: 100px;
                    display: block;


                }
            }

            .topic {
                width: 260px;
                height: 100px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                .user {
                    width: 100%;
                    height: 30px;
                    display: flex;
                    align-items: center;


                    .img {
                        width: 30px;
                        height: 30px;

                        img {
                            width: 100%;
                            height: auto;
                            border-radius: 50%;
                        }
                    }
                }
            }
        }
    }
}
</style>