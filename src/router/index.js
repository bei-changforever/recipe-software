import {
  ImagePreview
} from 'vant'
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [{
        path: 'recommended',
        name: 'recommended',
        component: () => import('../views/Recommended.vue')
      },
      {
        path: 'feed',
        name: 'feed',
        component: () => import('../views/Feed.vue')
      },
      {
        path: 'notes',
        name: 'notes',
        component: () => import('../views/Notes.vue')
      },
      {
        path: 'videos',
        name: 'videos',
        component: () => import('../views/Videos.vue')
      }
    ]
  },
  {
    path: '/class',
    name: 'Class',
    component: () => import('../views/Class.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue')
  },
  {
    path: '/star',
    name: 'Star',
    component: () => import('../views/Star.vue')
  },
  {
    path: '/my',
    name: 'My',
    component: () => import('../views/My.vue')
  },
  {
    path: "/myk",
    name: "Myk",
    component: () => import("../views/Myk.vue"),
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('../components/CaiPuDeatil.vue')
  },
  {
    path: '/notebook/',
    name: 'NoteBook',
    component: () => import('../components/NoteBook.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/seach',
    name: 'Search',
    component: () => import('../views/search.vue'),
    children: [{
      path: "searchPage",
      name: "searchPage",
      component: () => import("../views/SearchPage.vue"),
    }, ]
  },
  {
    path: "/userid",
    name: "Userid",
    component: () => import("../views/Userid.vue"),
  },
  {
    path: "/phoneNumberDetails",
    name: "PhoneNumberDetails",
    component: () => import("../views/PhoneNumberDetails.vue"),
  },
  {
    path: "/userLogin",
    name: "UserLogin",
    component: () => import("../views/UserLogin.vue"),
  },
  {
    path: '/MyFriend',
    name:'MyFriend',
    component:()=>import('../views/myFriends.vue')
  },
  {
    path: '/push',
    name: 'push',
    component:() => import('../views/Push.vue')
  },
  {
    path: '/pushpage',
    name: 'pushpage',
    component:()=>import('../views/PushPage.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
})


const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}



export default router