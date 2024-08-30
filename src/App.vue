<template>
  <div id="app">

    <router-view />
    <van-tabbar v-model="active" route active-color="rgb(244,206,81)" inactive-color="#000"
      v-if="$route.name !='Detail' && $route.name != 'NoteBook' && $route.name != 'Search' && $route.name != 'Userid' && $route.name != 'UserLogin' && $route.name != 'PhoneNumberDetails' && $route.name != 'MyFriend' && $route.name != 'push' && $route.name != 'pushpage'">
      <van-tabbar-item v-for="(item, index) in home_tab" :key="index" :to="{ name: item.routeName }">
        <span>{{ item.name }}</span>
        <template #icon="props">
          <img :src="props.active ? item.image_selected_url : item.image_unselected_url" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {

  data() {
    return {
      active: 0,

      home_tab: [
        {
          badge: 0,
          dark_image_selected_url: "https://i1.douguo.com/upload/note/d/d/4/ddce5db012d200d0c656a4883480e7b4.png",
          dark_image_unselected_url: "https://i1.douguo.com/upload/note/a/5/5/a586808bf37e9ed4ff03317940926535.png",
          image_selected_url: "https://i1.douguo.com/upload/banner/6/c/4/6c79ea04fc25d1ef5a976359e29a76e4.png",
          image_unselected_url: "https://i1.douguo.com/upload/banner/0/7/f/072aaff4630d9fd571b86c174b608c0f.png",
          index: 0,
          name: "首页",
          text: "",
          routeName: 'Home'
        },
        {
          badge: 0,
          dark_image_selected_url: "https://i1.douguo.com/upload/note/8/0/0/8058d8c221884cb62b93fb6c88cfee40.png",
          dark_image_unselected_url: "https://i1.douguo.com",
          image_selected_url: "https://i1.douguo.com/upload/banner/9/7/c/9795658a329ef1e63db5ac797eb747dc.png",
          image_unselected_url: "https://i1.douguo.com/upload/banner/a/e/2/ae66b4af3e411ba65fe452bff7845a42.png",
          index: 1,
          name: "课堂",
          text: "",
          routeName: 'Class'
        },
        {
          badge: 0,
          dark_image_selected_url: "https://i1.douguo.com/upload/note/e/c/3/ec074572ac94bdbee4f222aac41059b3.png",
          dark_image_unselected_url: "https://i1.douguo.com/upload/note/d/8/1/d8cd3fbf11759a27cdb43fba0546bc61.png",
          image_selected_url: "https://i1.douguo.com/upload/banner/6/c/8/6c739976317176fd86e81c8ca5900318.png",
          image_unselected_url: "https://i1.douguo.com/upload/banner/d/e/3/de8c0a8dfea6bfcdb3053d0ec47391c3.png",
          index: 2,
          name: "商城",
          text: "",
          routeName: 'Shop'
        },
        {
          badge: 0,
          dark_image_selected_url: "https://i1.douguo.com/upload/note/a/1/8/a11f82b6d0d86781f1d0e70309912168.png",
          dark_image_unselected_url: "https://i1.douguo.com/upload/note/7/9/7/794a02e08d6d210f396c6dc3fcfa24d7.png",
          image_selected_url: "https://i1.douguo.com/upload/banner/d/f/4/df227e5f9d363332ee14d9cdb227f974.png",
          image_unselected_url: "https://i1.douguo.com/upload/banner/6/7/b/677e0c4fe33ea1fb3781c8e69d06f58b.png",
          index: 3,
          name: "收藏夹",
          text: "",
          routeName: 'Star'
        },
        {
          badge: 0,
          dark_image_selected_url: "https://i1.douguo.com/upload/note/c/0/2/c0135e65d62c05a4c8dd7fab936e1e72.png",
          dark_image_unselected_url: "https://i1.douguo.com/upload/note/9/c/9/9c86f7196a6a9ba8f233fcb006b4d589.png",
          image_selected_url: "https://i1.douguo.com/upload/banner/d/c/f/dc060277b32a28edfc3d155e6157d33f.png",
          image_unselected_url: "https://i1.douguo.com/upload/banner/b/b/b/bba32b6d29734395aa397edebffdf48b.png",
          index: 4,
          name: "我的",
          text: "",
          // routeName: 'Myk'
          routeName: 'Myk'
        }
      ],

    };
  },
  computed: {
    ...mapState(['isLogin'])
  },
  created() {
    if (!localStorage.cookID) {
      localStorage.setItem('cookID', JSON.stringify([]))
    }
    if (!localStorage.likeuserId) {
      localStorage.setItem('likeuserId', JSON.stringify([]))
    }
    if (!localStorage.token) {
      localStorage.setItem('token', JSON.stringify([]))
    }
  },
  watch: {
    '$store.state.isLogin'(newVal) {
      if (newVal) {
        this.home_tab[4].routeName = 'My'
      }
      else {
        this.home_tab[4].routeName = 'Myk'
      }
    }
  }
};

</script>

<style lang="less">

</style>
