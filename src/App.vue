<template>
  <div id="app">
      <div>
          <div>DEPT</div>
          <router-link to="/contact"><div>Contact</div></router-link>
          <div @click="showMenu()">menu</div>

          <burger
                  :opened="showModal"
                  @toggle="showMenu()"
          />

      </div>
      <template v-if="showModal">
          <modal
                  @close="showModal = false"
          >
              <h3 slot="header">
                 DEPT
              </h3>
              <div slot="body">
                  <table>
                      <tr><td>blaat</td></tr>

                  </table>
              </div>
          </modal>
      </template>
    <router-view />
  </div>

</template>

<script>
    import Burger from './components/dumb/Burger.vue'
    import Modal from './components/containers/Modal.vue'
export default {
  name: 'app',
  methods: {
    showMenu () {
        this.showModal = true;
    }
  },
  components: {
    Modal,
    Burger,
  },
  data() {
    return {
      showModal: false,
    }
  },
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
