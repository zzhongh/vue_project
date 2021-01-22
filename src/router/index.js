import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/home' //重定向
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/home',
    name: 'home',
    redirect:'/index',//重定向
    meta:{title:'首页'},
    component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue'),
    children:[
      {
        path: '/index',
        name: 'index',
        meta:{title:'首页'},
        component: () => import(/* webpackChunkName: "about" */ '../views/home/index/index.vue'),

      },
      {
        path: '/wms',//信息管理
        name: 'wms',
        //添加一个面包屑使用的属性
        meta:{title:'信息管理'},
        component: () => import(/* webpackChunkName: "about" */ '../views/home/wms/index.vue'),
        children:[
          {
            path: '/wms/list',
            name: 'wmsList',
            meta:{title:'列表展示'},
            component: () => import(/* webpackChunkName: "about" */ '../views/home/wms/list.vue'),
          },
          {
            path: '/wms/info',
            name: 'wmsInfo',
            meta:{title:'详情展示'},
            component: () => import(/* webpackChunkName: "about" */ '../views/home/wms/info.vue'),
          },
        ]
      },

      {
        path: '/stats',//数据统计
        name: 'stats',
        meta:{title:'数据统计'},
        component: () => import(/* webpackChunkName: "about" */ '../views/home/stats/index.vue'),

      }


    ]
  
  }
]

const router = new VueRouter({
  routes
})

// 路由限制 路由拦截，返回到登录界面
router.beforeEach((to, from, next) => {
    if (!sessionStorage.getItem('username')) {
      if (to.path != '/login') {
        next('/login')
      }
    }
    next()
  })


export default router
