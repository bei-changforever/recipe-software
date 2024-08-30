<template>
    <div class="box">
        <div class="head" style="height: 50px">
            <div class="boxs" @click="dj"><van-icon name="arrow-left" size="20"/></div>
       
        </div>
        <div class="k"></div>
        <van-cell title="视频自动播放设置" is-link />
        <van-cell title="系统权限设置" is-link />
        <div class="m"></div>
        <van-cell title="帮助中心" is-link />
        <van-cell title="意见反馈" is-link />
        <van-cell title="给我们打分" is-link />
        <div class="m"></div>
        <van-cell title="用户协议" is-link />
        <van-cell title="隐私条款" is-link />
        <van-cell title="证照公示" is-link />
        <div class="m"></div>
        <van-cell title="版本检测" is-link value="当前版本 v7.1.19.2" />
        <van-cell title="清理缓存" is-link value="47M" />
        <van-button   block @click="bakDeng">退出登录</van-button>
    </div>
</template>

<script>
export default {
    name: "Setting",
    methods: {
        dj() {
            this.$router.go(-1);
        },

        bakDeng() {
            this.$dialog
                .confirm({
                    title: "退出登录",
                    message: "亲亲你真的要退出登录吗?",
                })
                .then(() => {
                    this.$router.push({
                        name: "Myk",
                    });
                    localStorage.removeItem("token");
                })
                .catch(() => {
                    // on cancel
                });
        },
    },
};
</script>

<style lang="less" scoped>
body {
    background: #fafafa;
}

.head {
    display: flex;
    align-items: center;
}

.boxs {
    margin-top: 5px;
}

.head img {
    width: 20px;
    height: 20px;
    margin-top: 35 px;
    margin-left: 10px;
    background: #ffffff;
}

.k {
    width: 99%;
    height: 15px;
    background: #fafafa;
    border: 1px solid #fafafa;
    margin-top: 10px;
    border-top: 1px solid #e1e1e1;
}

.text {
    margin-left: 20px;
    font-size: 20px;
}

.m {
    width: 100%;
    height: 15px;
    background: #fafafa;
}

.van-button {
    width: 95%;
    height: 40px;
    border-radius: 25px;
    margin: 0 auto;
    background-color: rgb(246, 198, 85);
    border: none;
    
}
</style>
