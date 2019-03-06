import Vue from 'vue'
import Router from 'vue-router'
import Article from './components/views/Article.vue'
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
      path: '/over/:lang',
      name: 'over',
      component: Article,
      props: true
    },
    {
      path: '/services/:lang',
      name: 'services',
      component: Article,
      props: true
    },
    {
      path: '/partners/:lang',
      name: 'partners',
      component: Article,
      props: true
    },
    {
      path: '/stories/:lang',
      name: 'stories',
      component: Article,
      props: true
    },
    {
      path: '/careers/:lang',
      name: 'careers',
      component: Article,
      props: true
    },
    {
      path: '/*',
      redirect: '/home/en_en/',
    },
  ],
})
