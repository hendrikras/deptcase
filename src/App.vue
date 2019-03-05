<template>
    <div id="app">
        <div v-if="$apollo.loading">Loading...</div>
        <div v-else>
            <router-link to="/home">
                <span>DEPT</span>
            </router-link>
                <a @click="setPage('contact', false)">Contact</a>
            <div @click="toggleMenu()">menu

                <burger :opened="showModal"/>
            </div>

        </div>
        <template v-if="showModal">
            <modal @close="toggleMenu()">
                <h3 slot="header"> DEPT </h3>
                <div slot="body">
                    <ul>
                        <li v-for="(item, key) in locales" v-bind:key="key">
                            <a @click="setLang(key)">{{ item }}</a>
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(item, key) in navItems" v-bind:key="key">
                            <button @click="setPage(key)">{{ item }}</button>
                        </li>
                    </ul>
                </div>
            </modal>
        </template>
        <router-view/>
    </div>

</template>

<script>
  import {navItems as query, locales} from './database/queries'
  import Burger from './components/dumb/Burger.vue'
  import Modal from './components/containers/Modal.vue'

  export default {
    name: 'app',
    mounted() {console.log(4, locales )},
    data() {
      return {
        locale: 'en_en',
        page: "home",
        showModal: false
      }
    },
    apollo: {
      locales,
      navItems: {
        query,
        variables() {
          return {
            country: this.locale
          }
        }
      }
    },
    methods: {
      toggleMenu() {
        this.showModal = !this.showModal;
      },
      setLang(locale) {
        this.locale = locale;
        this.setRoute(this.page, locale)
      },
      setPage(page, isMenu = true) {
        this.page = page;
        this.setRoute(page, this.locale)

        if (isMenu) {
          this.toggleMenu();
        }
      },
      setRoute(page, lang) {
        this.$router.push({ name: page, params:{ page, lang }})
      }
    },
    components: {
      Modal,
      Burger
    }
  }
</script>

<style>
    #app {
        font-family: FF Good Headline Pro XCond,Arial Narrow,Impact,sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
