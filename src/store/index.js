import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    tabCurrent: 'recommended',
    isLogin: false,
     //当前评论的id
     commentId: '',
      //个人信息
      selfITEMS: [
        {
          name: '蔡徐坤',
          lv: 8,
          picUrl: "https://p2.music.126.net/oohnKqUgkNEsYJHJDcGmZw==/19000660439857160.jpg"
        }
      ],
        //保存文件的base64信息
      imgBase64: [],
  },
  getters: {
  },
  mutations: {
    updateTabCurrent(state,val) {
      state.tabCurrent = val
    },
    updateLogin(state,val) {
      state.isLogin = val
      // console.log(val)
    },
    updatecommentId(state,val) {
      state.commentId = val
      // console.log(val)
    },
    updateimgBase64(state,val) {
      state.imgBase64.push(val)
      console.log(val)
    }
  },
  actions: {

  },
  modules: {
  }
})
