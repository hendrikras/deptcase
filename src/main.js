import Vue from 'vue'
import App from './App.vue'
import { router } from './routes'
import ApolloClient from 'apollo-boost'
import VueApollo from 'vue-apollo'

Vue.config.productionTip = false

const apolloClient = new ApolloClient({
  uri: 'http://localhost:9002/graphql'
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

new Vue({
  el: '#app',
  router,
  apolloProvider,
  render: h => h(App),
});
