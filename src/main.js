import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible/flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/css/iconfont.css'
import { Cell, CellGroup,Tag ,Switch , Divider ,Tabbar, TabbarItem ,NavBar,Icon,Swipe, SwipeItem  ,Button ,Lazyload ,Popup,Field,Form,Dialog ,Toast,Circle,Grid, GridItem , Tab, Tabs ,Slider  ,Search  ,Empty ,Popover,Sticky,ImagePreview , Col,Row, Skeleton ,Uploader,List  } from 'vant';
Vue
.use(VueAxios, axios)
.use(Tabbar)
.use(TabbarItem)
.use(NavBar)
.use(Icon)
.use(Swipe)
.use(SwipeItem)
.use(Divider)
.use(Button)
.use(Tag)
.use(Popup)
.use(Switch)
.use(Cell)
.use(CellGroup)
.use(Field)
.use(Form)
.use(Toast)
.use(Dialog)
.use(Circle)
.use(Grid)
.use(GridItem)
.use(Tab)
.use(Tabs)
.use(Slider)
.use(Search)
.use(Empty)
.use(Popover)
.use(Sticky)
.use(Col)
.use(Row)
.use(Skeleton)
.use(Uploader)
.use(List)
.use(ImagePreview)
Vue.config.productionTip = false
// axios.defaults.baseURL = 'https://apis.netstart.cn/douguo'
axios.interceptors.request.use(function(config) {
  Toast.loading({
    message: '加载中',
    forbidClick: true,
    duration: 0
  })

  return config
}),function(err) {
  Toast.clear();
  return Promise.reject(error);
}

axios.interceptors.response.use(function(response) {
  Toast.clear()
  return response
}),function(error) {
  Toast.clear()
  return Promise.reject(error)
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
