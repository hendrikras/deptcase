<template>
  <content-wrapper v-bind:page="page" v-bind:lang="lang">
    <div v-for="{id, firstName, lastName, avatar} in employees" v-bind:key="id">
      <div>{{ firstName }} {{ lastName }}</div>
      <img v-bind:src="avatar" aria-label="avatar"/>
    </div>
  </content-wrapper>
</template>

<script>
  import ContentWrapper from '../containers/ContentWrapper.vue'
  import {employees} from '../../database/queries'

  export default {
    props: {
      page: {
        type: String,
        default: ''
      },
      lang: {
        type: String,
        default: ''
      }
    },
    components: {ContentWrapper},
    apollo: {
      employees
    },
    name: "Home"
  }
</script>
