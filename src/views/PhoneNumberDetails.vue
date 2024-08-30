<template>
    <div>

        <div class="left" @click="dj"><van-icon name="arrow-left" size="20" /><p style="color: #999">注册</p> </div>
        <div class="yzmdl">请先注册</div>
        <div class="text">为了能更好的提供服务请注册</div>
        <van-form @submit="onSubmit">
            <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
            <div style="margin: 16px">
                <van-button color="rgb(255, 197, 51)" round block type="info" native-type="submit">注册</van-button>
            </div>
        </van-form>

        <label>
            <input type="checkbox" v-model="checkbox" class="fxk" /><span>登录注册即表示同意<span class="a">《用户协议》</span>和<span
                    class="a">《隐私政策》</span></span>
        </label>
    </div>
</template>

<script>
export default {
    name: "PhoneNumberDetails",
    data() {
        return {
            tel: "",
            username: "",
            password: "",
            checkbox: false,
        };
    },

    methods: {
        dj() {
            this.$router.go(-1);
        },

        onSubmit(values) {
            // localStorage.setItem(this.username, this.password);
         
            let userInfo = {

                username: this.username,
                password: this.password
            }

            localStorage.setItem('userInfo', JSON.stringify(userInfo))
            // console.log(JSON.parse(localStorage.getItem(this.username)));

            // localStorage.removeItem(this.username,this.password);

            if (this.checkbox) {
                // localStorage.setItem("token", JSON.stringify(timestamp) );

                this.$toast.success("注册成功");
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
    },
};
</script>

<style lang="less" scoped>
.left {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    text-indent: 0.5em;
}


.yzmdl {
    font-size: 26px;
    font-weight: 600;
    margin-left: 30px;
    margin-bottom: 10px;
}

.text {
    color: #aaa;
    font-size: 12px;
    margin-left: 30px;
    margin-bottom: 10px;
}

.num {
    margin-top: 50px;
    margin-left: 30px;
    font-size: 18px;
}

input {
    margin-left: 10px;
    height: 30px;
    border: none;
}

.x {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;
    margin-top: 15px;
    border-bottom: 1px solid #ccc;
}

.yzm {
    width: 90%;
    height: 50px;
    margin-left: 5%;
    margin-top: 10%;
    background: #f5f5f5;
    color: #999999;
    text-align: center;
    line-height: 50px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 20px 20px 20px 20px;
}

.zh {
    font-size: 12px;
    color: #ababab;
    margin-left: 5%;
    margin-top: 5%;
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

.qt {
    font-size: 12px;
    color: #ababab;
    margin-left: 5%;
    margin-top: 50%;
}
</style>
