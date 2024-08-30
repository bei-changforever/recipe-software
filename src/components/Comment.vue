<template>
    <div class="comment">
        <div class="header">
            <span>全部评论</span>
        </div>
        <div class="hotcomments">
            <ul>
                <li v-for="item in keyList">
                    <div class="left">
                        <img class="auto-img" :src="selfITEMS[0].picUrl" alt="">
                    </div>
                    <div class="right">
                        <div class="nickname">
                            <div class="nickname-left">
                                {{ selfITEMS[0].name }}
                                <br>
                                <p style="color: #999;font-size: 12px;">
                                    {{ item.reply[0].Thattime }}
                                </p>
                            </div>
                            <div class="nickname-right"><van-icon name="delete-o" /></div>
                        </div>
                        <div class="desc">
                            {{ item.reply[0].mes }}
                        </div>
                    </div>
                </li>

            </ul>
        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Comment',
    props: {
        nowComments: {

        },
        keyList: {

        }
    },
    computed: {
        ...mapState(['isLogin', 'selfITEMS'])
    },
}
</script>
<style lang="less" scoped>
.comment {
    width: 100%;
    height: auto;

    .header {
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: 600;
    }

    .hotcomments {
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        height: auto;

        ul {
            width: 100%;
            height: auto;
            background-color: white;
            border-radius: 15px;

            li {
                padding: 10px;
                margin-top: 15px;
                width: 100%;
                height: auto;
                display: flex;

                box-sizing: border-box;

                .left {
                    width: 20%;
                    height: auto;
                    display: flex;
                    justify-content: center;

                    .auto-img {
                        width: 50px;
                        height: 50px;
                        border-radius: 50%;
                        display: block;
                    }
                }

                .right {
                    display: flex;
                    flex-direction: column;
                    width: 80%;
                    height: auto;
                    // background-color: pink;

                    .nickname {
                        font-size: 18px;
                        width: 100%;
                        height: auto;
                        // background-color: orange;
                        display: flex;
                        justify-content: space-between;
                    }

                    .desc {
                        width: 100%;
                        height: auto;
                        font-size: 14px;
                    }


                    .huifu {
                        width: 100%;
                        height: 20px;
                        height: auto;
                        display: flex;
                        align-items: center;
                    }

                }
            }
        }

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
</style>