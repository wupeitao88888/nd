import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Product from '@/components/Product'
import HomeReport from '@/components/HomeReport'
import HomePartner from '@/components/HomePartner'
import GoNd from '@/components/GoNd'
import GoNdHistory from '@/components/GoNdHistory'
import NewsNd from '@/components/NewsNd'
import NewsNdInfo from '@/components/NewsNdInfo'
import CooperationCase from '@/components/CooperationCase'
import CooperationCaseInfo from '@/components/CooperationCaseInfo'
import ContactUs from '@/components/ContactUs'

Vue.use(Router)


const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/homereport',
      name: 'HomeReport',
      component: HomeReport

    },

    {
      path: '/homepartner',
      name: 'HomePartner',
      component: HomePartner
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/gond',
      name: 'GoNd',
      component: GoNd
    }
    ,
    {
      path: '/gondhistory',
      name: 'GoNdHistory',
      component: GoNdHistory
    }
    ,
    {
      path: '/newsnd',
      name: 'NewsNd',
      component: NewsNd
    }
    ,
    {
      path: '/newsndinfo',
      name: 'NewsNdInfo',
      component: NewsNdInfo
    }
    ,
    {
      path: '/cooperationcase',
      name: 'CooperationCase',
      component: CooperationCase
    },
    {
      path: '/cooperationcaseinfo',
      name: 'CooperationCaseInfo',
      component: CooperationCaseInfo
    },
    {
      path: '/contactus',
      name: 'ContactUs',
      component: ContactUs
    },
    
  ]
})
