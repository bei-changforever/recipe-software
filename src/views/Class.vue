<template>
    <div>
        <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
            <template #action>
                <div @click="onSearch" class="gm">已购买</div>
            </template>
        </van-search>
        <div class="box">
            <span class="img">
                <img src="../assets/images/mianbao(hui).png" alt="" />
                <p>面包</p>
            </span>
            <span class="img">
                <img src="../assets/images/tiandian(hui).png" alt="" />
                <p>甜点</p>
            </span>
            <span class="img">
                <img src="../assets/images/baozi(hui).png" alt="" />
                <p>中式面点</p>
            </span>
            <span class="img">
                <img src="../assets/images/kaochuan(hui).png" alt="" />
                <p>特色小吃</p>
            </span>
            <span class="img">
                <img src="../assets/images/caidao(hui).png" alt="" />
                <p>家常菜</p>
            </span>
        </div>
        <div class="box">
            <span class="img">
                <img src="../assets/images/dangao(hui).png" alt="" />
                <p>蛋糕</p>
            </span>
            <span class="img">
                <img src="../assets/images/yinliao(hui).png" alt="" />
                <p>饮品</p>
            </span>
            <span class="img">
                <img src="../assets/images/bofang(hui).png" alt="" />
                <p>限时免费</p>
            </span>
            <span class="img">
                <img src="../assets/images/naiping(hui).png" alt="" />
                <p>宝宝辅食</p>
            </span>
            <span class="img">
                <img src="../assets/images/VIP(hui).png" alt="" />
                <p>VIP免费</p>
            </span>
        </div>
        <div class="p-box">
            <span class="s-l">热卖好课</span>
            <span class="s-r">更多</span>
        </div>
        <div id="for">
            <van-swipe :loop="false" :width="200" :show-indicators="false">
                <van-swipe-item class="swipe" v-for="(item, index) in text" :key="index">
                    <img :src="item.url" alt="" />
                    <p>{{ item.name }}</p>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="p-box">
            <span class="s-l">精品新课</span>
            <span class="s-r">更多</span>
        </div>
        <div id="for">
            <van-swipe :loop="false" :width="200" :show-indicators="false">
                <van-swipe-item class="swipe" v-for="(item2, index2) in text2" :key="index2">
                    <img :src="item2.url" alt="" />
                    <p>{{ item2.name }}</p>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="p-box">
            <span class="s-l">最新上架</span>
            <span class="s-r">更多</span>
        </div>
        <div id="for">
            <van-swipe :loop="false" :width="200" :show-indicators="false">
                <van-swipe-item class="swipe" v-for="(item3, index3) in text3" :key="index3">
                    <img :src="item3.url" alt="" />
                    <p>{{ item3.name }}</p>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="p-box">
            <span class="s-l">VIP免费课程</span>
            <span class="s-r">更多</span>
        </div>
        <div id="for">
            <van-swipe :loop="false" :width="200" :show-indicators="false">
                <van-swipe-item class="swipe" v-for="(item4, index4) in text4" :key="index4">
                    <img :src="item4.url" alt="" />
                    <p>{{ item4.name }}</p>
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="dianzi" style="height: 10vh"></div>
    </div>
</template>

<script>
export default {
    name: "classroom",
    data() {
        return {
            text: [
                {
                    url: "https://img1.baidu.com/it/u=4051803928,3079775435&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
                    name: "【今日秒杀】波士顿龙虾！舌尖以清新的香气主宰着世界,不要给自己排名,只要健康第一.",
                },
                {
                    url: "https://img0.baidu.com/it/u=762085256,1288068868&fm=253&fmt=auto&app=138&f=JPEG?w=910&h=500",
                    name: "【今日秒杀】盖特披萨! 选择更好,人生更美,懂得挑战,懂得分享。披萨有保险,美味有保证盖特披萨",
                },
                {
                    url: "https://img1.baidu.com/it/u=4134189666,4142578718&fm=253&fmt=auto&app=138&f=JPEG?w=690&h=441",
                    name: "【今日秒杀】顶级叉烧! 如果你不开心就做一顿叉烧吃吧!如果一顿不够吃就吃两顿,叉烧 最好吃!",
                },
                {
                    url: "https://img2.baidu.com/it/u=1147005904,193218196&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333",
                    name: "美美的虾仁蔬菜沙拉～配上咖啡和水果蛋糕,热爱早餐,热爱生 活,又是元气满满的一天",
                },
                {
                    url: "https://img0.baidu.com/it/u=2718980415,581692139&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
                    name: "【今日秒杀】精选食材,精制料理,美好回味你懂的!北海道的风味,舌尖上的美味。",
                },
                {
                    url: "https://img0.baidu.com/it/u=3117249264,3134069702&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
                    name: "一爪一口满嘴香火鸡变成金凤凰。火鸡鸡爪一吃抓住你的胃,顺便抓住你的心。",
                },
                {
                    url: "https://img1.baidu.com/it/u=1580241205,2649940072&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                    name: "【网红爆款】生活除了诗和远方还有烧烤和啤酒。焦虑没什么可怕的，就像烤肉，焦一点更好吃。",
                },
                {
                    url: "https://img2.baidu.com/it/u=3698418575,3666795600&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=333",
                    name: "【网红爆款】传承百年工艺,世界共享美味。重庆张鸭子,卤烤天下绝。",
                },
                {
                    url: "https://img2.baidu.com/it/u=438233946,2296275561&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                    name: "【网红爆款】咀嚼的肉片中饱含浓醇红油的汤汁,入 口肥瘦相间,最后舌尖上只剩丝丝的麻。",
                },
                {
                    url: "https://img2.baidu.com/it/u=1567497816,570485735&fm=253&fmt=auto&app=138&f=JPEG?w=499&h=380",
                    name: "【今日秒杀】舌尖上的非遗|肥而不腻、色泽艳丽 ——东坡肘子",
                },
            ],
            text2: [
                {
                    url: "https://img0.baidu.com/it/u=3078748924,257290966&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
                    name: "你的回味就是我的领会——浓情鸡排,香浓情更浓,啃定不一样。",
                },
                {
                    url: "https://img2.baidu.com/it/u=849995377,520435495&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
                    name: "盖特披萨! 选择更好,人生更美,懂得挑战,懂得分享。披萨有保险,美味有保证盖特披萨",
                },
                {
                    url: "https://img1.baidu.com/it/u=1294439722,116143144&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
                    name: "带给你恋人般的享受,拂去您全部的烦恼",
                },
                {
                    url: "https://img2.baidu.com/it/u=1376479173,2818226032&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=578",
                    name: "鸡”动每一秒,“堡”准忘不了。波客堡,每天为您派上最鲜美的美食。",
                },
                {
                    url: "https://img0.baidu.com/it/u=3875972442,3590056617&fm=253&fmt=auto&app=138&f=JPEG?w=781&h=500",
                    name: "生活除了诗和远方还有烧烤和啤酒。焦虑没什么可怕的，就像烤肉，焦一点更好吃。",
                },
                {
                    url: "https://img2.baidu.com/it/u=837447211,2688424829&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
                    name: "轻轻的,我来了!正如你轻轻地来一口……我挥一挥衣袖,留下你的回味悠悠——精致寿司。",
                },
                {
                    url: "https://img2.baidu.com/it/u=3096226424,2372933137&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                    name: "盖特披萨! 选择更好,人生更美,懂得挑战,懂得分享。披萨有保险,美味有保证盖特披萨",
                },
                {
                    url: "https://img2.baidu.com/it/u=1119797231,1724730465&fm=253&fmt=auto&app=138&f=JPEG?w=781&h=500",
                    name: "吃一口,还想吃下一口的鲜烤肠。零添加的烤香肠,舌尖上的中国香",
                },
                {
                    url: "https://img1.baidu.com/it/u=3672239082,768326781&fm=253&fmt=auto&app=138&f=JPEG?w=781&h=500",
                    name: "千年杭城美如画,韩式烤肉香天下。韩式烤肉阿咪香,生态美味健康享",
                },
                {
                    url: "https://img2.baidu.com/it/u=3550313149,1184703868&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500",
                    name: "吃一口,还想吃下一口的鲜烤肠。零添加的烤香肠,舌尖上的中国香",
                },
            ],
            text3: [
                {
                    url: "https://img1.baidu.com/it/u=1790277985,1475899194&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                    name: "我们的信仰——精益求精,我们的鸡肉——注重品质。",
                },
                {
                    url: "https://img0.baidu.com/it/u=3811753175,1795867003&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500",
                    name: "一次不吃你的错,只吃一次我的错不在多",
                },
                {
                    url: "https://img2.baidu.com/it/u=1070754504,902615963&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=281",
                    name: "你好，很高兴为你解答，铁血丹心，板上钉钉，还在犹豫，不如来一串铁板鱿鱼，吃完之后生活不再犹豫，只想鱿鱼。",
                },
                {
                    url: "https://img2.baidu.com/it/u=288398694,1611576594&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800",
                    name: "汤若鱼生有你,何其三生有幸。鱼生百味,鲜聚豆结。",
                },
                {
                    url: "https://img1.baidu.com/it/u=280624062,3124813855&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                    name: "香锅里辣，停不了的飘香美味,香锅里辣，麻辣鲜香，营养健康。",
                },
                {
                    url: "https://img2.baidu.com/it/u=2474206930,4010471124&fm=253&fmt=auto&app=138&f=JPEG?w=801&h=500",
                    name: "泰哥云吞,“食”不我待。品·立健康,味·道时尚——泰哥云吞。",
                },
                {
                    url: "https://img2.baidu.com/it/u=3263663482,1989914049&fm=253&fmt=auto&app=138&f=JPEG?w=740&h=500",
                    name: "琴声秋色一湖融,一品螃蟹迎宾朋。一流品质螃蟹,自然横行霸道。",
                },
                {
                    url: "https://img0.baidu.com/it/u=1398269767,2879293300&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500",
                    name: "吃一口,还想吃下一口的鲜烤肠。零添加的烤香肠,舌尖上的中国香",
                },
                {
                    url: "https://img0.baidu.com/it/u=389348513,2739004771&fm=253&fmt=auto&app=138&f=JPEG?w=752&h=500",
                    name: "简朴外表土豪芯,你不容错过的肉夹馍。只选择对的,不需要贵的,肉夹馍给您想要的味道",
                },
                {
                    url: "https://img0.baidu.com/it/u=4287519903,2203843118&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                    name: "吃在口中香,甜在心里边。用年轮陪伴您的美味佳肴。",
                },
            ],
            text4: [
                {
                    url: "https://img2.baidu.com/it/u=2059479174,70465281&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
                    name: "千年杭城美如画,韩式烤肉香天下。韩式烤肉阿咪香,生态美味健康享",
                },
                {
                    url: "https://img2.baidu.com/it/u=25751969,395251137&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=385",
                    name: "好看友好吃，领香更领鲜。给青春一个释放！新美味·馨生活·心选择。",
                },
                {
                    url: "https://img1.baidu.com/it/u=2321131581,2350664828&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=480",
                    name: ".包罗万馅,满口留香。出色表馅,赞不绝口。美味食尚,包罗万象",
                },
                {
                    url: "https://img0.baidu.com/it/u=3864823922,2181470057&fm=253&fmt=auto&app=138&f=JPEG?w=712&h=487",
                    name: "勃艮第蜗牛又叫“葡萄蜗牛”或“大白蜗牛”,在放入香气四溢的高汤",
                },
                {
                    url: "https://img2.baidu.com/it/u=3210397776,1899728809&fm=253&fmt=auto&app=138&f=JPEG?w=600&h=400",
                    name: " 色泽红润,口味浓郁,酱香四逸肥而不腻,瘦而不柴",
                },
                {
                    url: "https://img2.baidu.com/it/u=974509549,300239890&fm=253&fmt=auto&app=138&f=JPEG?w=749&h=500",
                    name: "生活不仅要吃甜头,还要吃手抓鸡肉卷。恋爱可以慢慢谈,手抓鸡肉卷必须趁热吃。",
                },
                {
                    url: "https://img2.baidu.com/it/u=3705680997,1886076982&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=500",
                    name: "流心芝士挞――酥软甜美,恋人的嘴。一口酥香,一世爱恋",
                },
                {
                    url: "https://img1.baidu.com/it/u=1461556145,4140810173&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                    name: "生活除了诗和远方还有烧烤和啤酒。焦虑没什么可怕的，就像烤肉，焦一点更好吃",
                },
                {
                    url: "https://img1.baidu.com/it/u=192483891,3577697566&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                    name: "盖特披萨! 选择更好,人生更美,懂得挑战,懂得分享。披萨有保险,美味有保证盖特披萨",
                },
                {
                    url: "https://img0.baidu.com/it/u=2720509232,3171562940&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
                    name: "生活除了诗和远方还有烧烤和啤酒。焦虑没什么可怕的，就像烤肉，焦一点更好吃",
                },
            ],
            //激活选项卡的下标
            tabbarIndex: 1,
            value: "",
            //底部选项卡的数据
        };
    },
    methods: {
        onSearch() { },
    },
};
</script>

<style lang="less" scoped>
.box {
    margin-top: 0.7rem;
}

.img {
    margin-left: 28px;
    position: relative;
    top: 0;
    left: 0;
    margin-left: 1rem;
}

.img img {
    width: 30px;
    height: 30px;
}

.img p {
    width: 50px;
    display: inline-block;
    position: absolute;
    top: 0;
    left: -0.1rem;
}

#for {
    width: 100%;
    height: auto;
    // background-color: pink;
    box-sizing: border-box;
    border-radius: 15px;

    .van-swipe {
        width: 100%;
        height: auto;

        .van-swipe-item {
            height: auto;
            padding: 10px;

            img {
                width: 200px;
                height: 250px;
                border-radius: 15px;
            }


        }
    }

}




.gm {
    color: rgb(90, 156, 164);
}


.p-box {
    width: 100%;
    margin-bottom: 30px;
    margin-top: 30px;
}

.s-l {
    float: left;
    font-size: 16px;
    font-weight: 600;
    margin-left: 20px;
}

.s-r {
    float: right;
    font-size: 10px;
    color: rgb(7, 108, 119);
    margin-right: 20px;
}
</style>
