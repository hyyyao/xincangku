import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Deng from '@/views/deng'
import Zhu from '@/views/zhu'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/deng',
        name: Deng,
        component: Deng
    }, {
        path: '/zhu',
        name: Zhu,
        component: Zhu
    }, {
        path: '/',
        redirect: '/zhu'
    }]
})