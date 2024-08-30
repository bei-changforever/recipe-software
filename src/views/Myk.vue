<template>
    <div>
        <div class="head">
            <span class="span1"><img src="../assets/images/setting.png" /></span>
            <span class="span2" @click="rz"><img src="../assets/images/ring.png" /></span>
        </div>

        <div class="text">
            <h2>豆果美食</h2>
            <h2>会做饭很酷~</h2>
        </div>
        <div class="dl" @click="dj">手机号注册登录</div>
        <label>
            <input type="checkbox" v-model="checkbox" class="fxk" /><span>登录注册即表示同意<span class="a">《用户协议》</span>和<span class="a">《隐私政策》</span></span>
        </label>
    </div>
</template>
<script>
export default {
    name: "Myk",
    data() {
        return {
            //激活选项卡的下标
            tabbarIndex: 4,

            checkbox: false,
            //底部选项卡的数据
        };
    },
    methods: {
        dj() {
            if (this.checkbox) {
                this.$router.push({
                    name: "UserLogin",
                });
            } else {
                this.$toast({
                    message: "亲请先沟选用户协议哦~~",
                    position: "top",
                });
            }
        },

        rz() {
            this.$router.push({
                name: "UserLogin",
            });
        },
    },
};
</script>
<style lang="less" scoped>
.head img {
    width: 25px;
    height: 25px;
    margin-top: 30px;
}

.span1 {
    margin-left: 20px;
}

.span2 {
    float: right;
    margin-right: 20px;
}

.text {
    margin-top: 40px;
    margin-left: 30px;
}

h2 {
    margin: 0;
    font-size: 30px;
}

.dl {
    width: 90%;
    height: 40px;
    margin: auto;
    background: rgb(255, 197, 51);
    text-align: center;
    line-height: 40px;
    border-radius: 20px 20px 20px 20px;
    font-size: 16px;
    font-weight: 600;
    margin-top: 70%;
}

.p {
    color: #c0c0c0;
    margin-top: 20px;
    margin-left: 20px;
}

button {
    width: 90%;
    height: 40px;
    border-radius: 20px 20px 20px 20px;
    font-size: 16px;
    font-weight: 600;
    border: none;
    background: rgb(255, 197, 51);
}

.img-box img {
    margin-top: 10px;
    margin-left: 20px;
    width: 30px;
    height: 30px;
}

.fxk {
    width: 10px;
    height: 10px;
    margin-left: 20px;
    margin-top: 20px;
}

.a {
    color: #5699a2;
}
</style>
