<template>
    <div id="app">
        <div v-if="$apollo.loading">Loading...</div>
        <styled-nav-bar v-else>
            <row :ruler="true">
                <column>
                    <styled-nav-button :big="true" @click="setPage('home', false)">
                        <span>DEPT</span>
                    </styled-nav-button>
                </column>
                <column>
                    <div>
                        <styled-nav-button @click="setPage('contact', false)">
                            CONTACT
                        </styled-nav-button>
                        <styled-nav-button @click="toggleMenu()">
                            <span>
                                MENU
                                <burger :opened="showModal"/>
                            </span>
                        </styled-nav-button>
                    </div>
                </column>
            </row>
        </styled-nav-bar>
        <template v-if="showModal">
            <modal @close="toggleMenu()">
                <h3 slot="header"> DEPT </h3>
                <row slot="body">
                    <column>
                        <align-left-list>
                            <li v-for="(item, key) in locales" v-bind:key="key">
                                <styled-menu-button v-if="key !== '__typename'" @click="setLang(key)">{{ item.toUpperCase() }}</styled-menu-button>
                            </li>
                        </align-left-list>
                    </column>
                    <column>
                        <align-right-list>
                            <li v-for="(item, key) in navItems" v-bind:key="key">
                                <styled-menu-button :big="true" v-if="key !== '__typename'" @click="setPage(key)">{{ item.toUpperCase() }}
                                </styled-menu-button>
                            </li>
                        </align-right-list>
                    </column>
                </row>
            </modal>
        </template>
        <router-view/>
    </div>

</template>

<script>
  import {navItems as query, locales} from './database/queries'
  import {
    AlignLeftList,
    AlignRightList,
    StyledNavBar,
    StyledNavButton,
    StyledMenuButton,
    Column,
    Row
  } from './components/styled/globalStyles'
  import Burger from './components/dumb/Burger.vue'
  import Modal from './components/containers/Modal.vue'

  export default {
    name: 'app',
    data() {
      const {currentRoute: {name, params: {lang}}} = this.$router
      return {
        locale: lang || 'en_en',
        page: name,
        showModal: false
      }
    },
    mounted() {
      this.setRoute(this.page, this.lang)
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
        this.$router.push({name: page, params: {page, lang}})
      }
    },
    components: {
      AlignLeftList,
      AlignRightList,
      Burger,
      Column,
      StyledNavBar,
      StyledNavButton,
      StyledMenuButton,
      Modal,
      Row
    }
  }
</script>

<style>
    #app {
        font-family: FF Good Headline Pro XCond, Arial Narrow, Impact, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #000;
        margin-top: 60px;
    }
</style>
