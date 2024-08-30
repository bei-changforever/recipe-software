<template>
    <div class="shop">
        <van-row gutter="20">
            <van-col span="8" class="ss"><van-icon name="search" size="25" /></van-col>
            <van-col span="8" class="sc">商城</van-col>
            <van-col span="1" class="gwc"><van-icon name="shopping-cart-o" size="25" /></van-col>
        </van-row>
        <div class="van-hairline--bottom"></div>
        <div class="box">
            <span class="img">
                <img src="../assets/images/pingguo.png" alt="" />
                <p>果蔬</p>
            </span>
            <span class="img">
                <img src="../assets/images/yv.png" alt="" />
                <p>海鲜</p>
            </span>
            <span class="img">
                <img src="../assets/images/ro.png" alt="" />
                <p>肉蛋</p>
            </span>
            <span class="img">
                <img src="../assets/images/you.png" alt="" />
                <p>粮油</p>
            </span>
            <span class="img">
                <img src="../assets/images/mianbao.png" alt="" />
                <p>烘培</p>
            </span>
        </div>
        <div class="box">
            <span class="img">
                <img src="../assets/images/shutiao.png" alt="" />
                <p>零食</p>
            </span>
            <span class="img">
                <img src="../assets/images/kafei.png" alt="" />
                <p>饮品</p>
            </span>
            <span class="img">
                <img src="../assets/images/muyvlu.png" alt="" />
                <p>个护</p>
            </span>
            <span class="img">
                <img src="../assets/images/chushimao.png" alt="" />
                <p>餐厨</p>
            </span>
            <span class="img">
                <img src="../assets/images/shafa.png" alt="" />
                <p>家居</p>
            </span>
        </div>
        <h2>全部商品</h2>
        <div>
            <div class="naw">
                <span class="naw-box" v-for="(item, index) in title" :key="index">
                    <a ><img :src="item.url" alt="" /></a>
                    <p>{{ item.text }}</p>
                    <span class="text-red">{{ item.discount }}</span>
                    <span class="text-black">{{ item.original }}</span>
                </span>
            </div>
        </div>
        <div class="dianzi" style="height: 10vh"></div>
    </div>    
</template>
<script>
export default {
    name: 'Shop',
    data() {
        return {
            title: [
                {
                    url: "https://img11.360buyimg.com/n7/jfs/t1/210576/39/28700/183473/637a6187Ea18f3a6f/f441e86d159a9202.jpg",
                    text: "百草味 抱开心巨型零食大礼包 6斤装",
                    discount: "￥166.80",
                    original: "179.90",
                    http: "https://item.jd.com/100010057111.html",
                },
                {
                    url: "https://img12.360buyimg.com/n7/jfs/t1/82018/25/17011/145463/63730e68E1ffaa585/bb0b3810b3ed1645.jpg",
                    text: "三只松鼠巨型零食大礼包/30包 送女友礼物礼盒",
                    discount: "￥148.00",
                    original: "158.90",
                    http: "https://item.jd.com/8321142.html",
                },
                {
                    url: "https://img10.360buyimg.com/n7/jfs/t1/195105/29/31009/175490/637c6bcdE67ac0f80/8d9efff6738abfc6.jpg",
                    text: "良品铺子手撕面包2斤装 量贩早餐小面包代餐休闲零食",
                    discount: "￥24.90",
                    original: "29.90",
                    http: "https://item.jd.com/4544060.html",
                },
                {
                    url: "https://img14.360buyimg.com/n7/jfs/t1/85864/19/32367/172035/637af72cE3c3f206b/91cfe69755128cdc.jpg",
                    text: "良品铺子 纯肉零食大礼包12袋 节日送礼出游必备牛肉干",
                    discount: "￥129.00",
                    original: "139.90",
                    http: "https://item.jd.com/100009820314.html",
                },
                {
                    url: "https://img10.360buyimg.com/n7/jfs/t1/143701/23/31553/277327/637d88b9Ea717c8b4/0ae734df4b2062ac.jpg",
                    text: "良品铺子 肉肉大狂欢1768g零食大礼包16袋纯肉礼包",
                    discount: "￥189.00",
                    original: "199.00",
                    http: "https://item.jd.com/100019344635.html",
                },
                {
                    url: "https://img12.360buyimg.com/n7/jfs/t1/195837/18/10203/65282/60d59cdaE427ef8a3/cf8f2a878e0b9af3.jpg",
                    text: "Member's Mark 芝士夹心饼干 1kg 早餐糕点休闲零食",
                    discount: "￥71.76",
                    original: "82.00",
                    http: "https://item.jd.com/70873659197.html",
                },
                {
                    url: "https://img14.360buyimg.com/n7/jfs/t1/140942/40/31029/163825/637b1eaeE25ab54c9/62d75dac912acb7c.jpg",
                    text: "康师傅红烧牛肉面 85g*24袋 方便面整箱 张艺兴代言",
                    discount: "￥67.80",
                    original: "69.90",
                    http: "https://item.jd.com/3368844.html",
                },
                {
                    url: "https://img10.360buyimg.com/n7/jfs/t1/98964/30/32854/283836/632448a7E0da8b834/597aa8a870a65eab.jpg",
                    text: "海底捞自热火锅方便速食麻辣嫩牛脆爽牛肚酸爽番茄",
                    discount: "￥129.90",
                    original: "139.90",
                    http: "https://item.jd.com/100007843895.html",
                },
                {
                    url: "https://img12.360buyimg.com/n7/jfs/t1/158816/7/17841/43839/606e8417E8014fb2d/0cd62174e4422b8d.jpg",
                    text: "Member’s Mark 半蒸芝士蛋糕1kg 23枚 早餐糕点 ",
                    discount: "￥59.16",
                    original: "63.0",
                    http: "https://item.jd.com/10020894560522.html",
                },
                {
                    url: "https://img12.360buyimg.com/n7/jfs/t1/48222/13/22267/263564/637ec9f1Eb5457911/872284476e61483c.jpg",
                    text: "鲨鱼菲特2000g鸡胸肉即食低脂高蛋白肉脯健身餐代餐",
                    discount: "￥89.00",
                    original: "98.00",
                    http: "https://item.jd.com/100015493342.html",
                },
                {
                    url: "https://img10.360buyimg.com/n7/jfs/t1/102105/24/28005/505100/6268bbafEdc1e803e/8e9da447b03cae40.jpg",
                    text: "王小卤虎皮凤爪卤香味200g鸡爪网红零食休闲食品熟食即食下酒菜",
                    discount: "￥28.50",
                    original: "36.00",
                    http: "https://item.jd.com/100014336380.html",
                },
                {
                    url: "https://img11.360buyimg.com/n7/jfs/t1/158830/23/33149/164855/63809c56Eaae4d172/27b4e63c6d7e134b.jpg",
                    text: "雀巢(Nestle) 脆脆鲨 休闲零食 威化饼干 巧克力口味",
                    discount: "￥27.90",
                    original: "32.00",
                    http: "https://item.jd.com/508411.html",
                },
                {
                    url: "https://img13.360buyimg.com/n7/jfs/t1/136830/40/23080/146088/62174efaE339aefc2/da47d13f07fb4cdd.jpg",
                    text: "双汇王中王 火腿肠 60g*10支/600g装 香肠火腿 ",
                    discount: "￥24.09",
                    original: "29.90",
                    http: "https://item.jd.com/865673.html",
                },
                {
                    url: "https://img13.360buyimg.com/n7/jfs/t1/147307/40/31158/107598/6371fc6aE204b7765/c0600103e0e551e1.jpg",
                    text: "无穷 鸡蛋卤蛋休闲零食泡面搭档盐焗味486g/16小包",
                    discount: "￥33.80",
                    original: "39.00",
                    http: "https://item.jd.com/100006538443.html",
                },
                {
                    url: "https://img12.360buyimg.com/n7/jfs/t1/200012/19/13750/113148/616e70cfEd06a2a97/0535bcaab8e10132.jpg",
                    text: "小猪呵呵 火腿午餐肉罐头量贩装198g*9罐装早餐涮火锅户外",
                    discount: "￥138.00",
                    original: "153.00",
                    http: "https://item.jd.com/100005803887.html",
                },
                {
                    url: "https://img11.360buyimg.com/n7/jfs/t1/140874/40/31538/185821/63735a5cE3f5f499d/6151ee58b0db066b.jpg",
                    text: "乐事（Lay's）薯片休闲食品爱意满满大礼盒送女友送男友",
                    discount: "￥79.00",
                    original: "83.00",
                    http: "https://item.jd.com/4825006.html",
                },
                {
                    url: "https://img13.360buyimg.com/n7/jfs/t1/124935/9/21842/503844/620c6f60Ec110308d/9e74507bf1bd920e.jpg",
                    text: "食族人酸辣粉130g*6桶整箱装 粉丝酸辣粉重庆风味正宗红薯粉拌粉",
                    discount: "￥48.80",
                    original: "56.00",
                    http: "https://item.jd.com/100001155238.html",
                },
                {
                    url: "https://img11.360buyimg.com/n7/jfs/t1/157747/2/28309/109683/636dbd2bEf8323201/343ded0d77a7c7a6.jpg",
                    text: "空刻番茄肉酱意面270g*10盒装意面家用方便速食意粉通心粉意大利面",
                    discount: "￥308.80",
                    original: "328.00",
                    http: "https://item.jd.com/100013298179.html",
                },
                {
                    url: "https://img10.360buyimg.com/n7/jfs/t1/96102/21/32202/656591/63593be1Ea7058855/859bad982a949252.png",
                    text: "900 压缩饼干200g*20袋8斤早餐代餐4年长保质期营养早餐",
                    discount: "￥119.00",
                    original: "129.90",
                    http: "https://item.jd.com/10029870362270.html",
                },
                {
                    url: "https://img11.360buyimg.com/n7/jfs/t1/27274/4/13744/303208/5ca2d5ccEf131ccf4/b39e239db37b5273.jpg",
                    text: "林家铺子 糖水黄桃水果罐头 425g*6罐 整箱2550g ",
                    discount: "￥43.80",
                    original: "49.90",
                    http: "https://item.jd.com/4346456.html",
                },
            ],
            //激活选项卡的下标
            tabbarIndex: 2,
        };
    },
}
</script>
<style lang="less" scoped>
.ss,
.sc,
.gwc {
    margin-left: 10px;
    margin-top: 10px;
}

.sc {
    margin-left: 25px;
}
.sc {
    font-size: 18px;
    font-weight: 600;
}

.gwc {
    margin-left: 40px;
}

.van-hairline--bottom {
    margin-top: 20px;
}

.box {
    margin-top: 30px;
}

.img {
    margin-left: 28px;
    position: relative;
    top: 0;
    left: 0;
}

.img img {
    width: 40px;
    height: 40px;
}

.img p {
    display: inline-block;
    position: absolute;
    top: 0;
    left: 8px;
}

h2 {
    margin: 0;
    margin-top: 30px;
    margin-left: 20px;
}

.naw-box {
    width: 150px;
    float: left;
    margin-left: 0.65rem;
    margin-top: 20px;
}

.naw-box img {
    width: 160px;
    height: 150px;
    display: inline-block;
    border-radius: 10px 10px 10px 10px;
}

.naw-box p {
    font-size: 14px;
}

.text-red {
    font-size: 18px;
    color: red;
}

.text-black {
    font-size: 12px;
    color: #ccc;
    text-decoration: line-through;
    margin-left: 5px;
}
</style>