<template>
    <div id="app">
        <div>
            <router-link to="/home"> <span>DEPT </span> </router-link>
            <router-link to="/contact">
                <div>Contact</div>
            </router-link>
            <div @click="toggleMenu()">menu

                <burger :opened="showModal"/>
            </div>

        </div>
        <template v-if="showModal">
            <modal @close="toggleMenu()">
                <h3 slot="header"> DEPT </h3>
                <div slot="body">
                    <ul>
                        <li v-for="item in navItems" v-bind:key="item"> {{ item }}</li>
                    </ul>
                </div>
            </modal>
        </template>
        <router-view/>
    </div>

</template>

<script>
  import { navItems } from './database/queries'
  import Burger from './components/dumb/Burger.vue'
  import Modal from './components/containers/Modal.vue'

  export default {
    name: 'app',
    apollo: {
      navItems,
    },
    methods: {
      toggleMenu() {
        this.showModal = !this.showModal;
      }
    },
    components: {
      Modal,
      Burger
    },
    data() {
      return {
        showModal: false
      }
    }
  }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
