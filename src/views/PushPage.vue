<template>
    <div class="pushpage">
        <div class="header">
            <van-icon name="arrow-left" size="20" @click="$router.go(-1)" />
        </div>
        <div class="addimg">
            <h1>添加图片</h1>
            <van-uploader :after-read="afterRead" v-model="fileList" multiple />
        </div>
        <div class="adddesc">
            <h1>添加文案</h1>
            <textarea rows="10" v-model="descList"></textarea>
        </div>
        <div class="btn">
            <van-button @click="push" type="primary" size="large">发布</van-button>
        </div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
export default {
    name: 'PushPage',
    data() {
        return {
            //图片预览
            fileList: [],
            //文案
            descList: '',
            imageBase64: []
        }
    },
    methods: {
        afterRead(file) {
            // 此时可以自行将文件上传至服务器
            this.imageBase64.push({ url: file.content })
        },
        push() {

            if (this.descList) {
                
                this.updateimgBase64({
                    imginfo: this.imageBase64,
                    desc: this.descList
                })

                this.$toast.loading({
                    duration: 0, // 持续展示 toast
                    forbidClick: true,
                    message: '检测中',
                });

                let second = 3;
                const timer = setInterval(() => {
                    second--;
                    if (second) {
                        this.$toast.message = `检测 ${second} 秒`;
                    } else {
                        clearInterval(timer);
                        // 手动清除 Toast
                        this.$toast.clear();
                        this.$router.go(-2);
                    }
                }, 1000);
            } else {
                this.$toast('请输入描述文案')
            }

        },
        ...mapMutations(['updateimgBase64'])
    }
}
</script>
<style lang="less" scoped>
.pushpage {
    width: 100%;
    height: auto;

    .header {
        width: 100%;
        box-sizing: border-box;
        padding: 10px;
        height: 40px;
        display: flex;
        align-items: center;
    }

    .addimg {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 10px;
    }

    .adddesc {
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 10px;

        textarea {
            width: 100%;
            height: auto;
            user-select: none;
            resize: none;
            font-size: 16px;
            border: 0;
            background-color: rgb(220, 222, 224);
        }
    }

    .btn {
        background-color: white;
        position: fixed;
        bottom: 0;
        left: 0;
        z-index: 2;
        width: 100%;
        height: auto;
        box-sizing: border-box;
        padding: 10px;
    }

}
</style>