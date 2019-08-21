import Vue from 'vue'
import Router from 'vue-router'
import Mainpage from '@/components/MainPage'
import DetailPage from '@/components/DetailPage'

Vue.use(Router)

export const router= new Router({
  mode : 'history',
  router: [
    {
      path: '/',
      name: 'MainPage',
      component: Mainpage
    },
    {
      path: '/DetailPage',
      name: 'DetailPage',
      component: DetailPage
    }
  ]
})
