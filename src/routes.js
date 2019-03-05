import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/views/Home.vue'
import Contact from './components/views/Contact.vue'
import Work from  './components/views/Work.vue'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/home/:lang',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/work/:lang',
      name: 'work',
      component: Work,
      props: true
    },
    {
      path: '/contact/:lang',
      name: 'contact',
      component: Contact,
      props: true
    },
    {
      path: '/*',
      redirect: '/home/en_en/',
    },
  ],
})
