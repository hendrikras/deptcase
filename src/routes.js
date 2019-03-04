import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/views/Home.vue'
import Contact from './components/views/Contact.vue'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/*',
      redirect: '/',
    },
  ],
})
