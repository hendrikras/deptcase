<template>
  <div>
    <h1>{{page}}</h1>
    <div v-for="{id, firstName, lastName, avatar} in employees" v-bind:key="id">
      <div>{{ firstName }} {{ lastName  }} </div>
      <img v-bind:src="avatar" aria-label="avatar"/>
    </div>
  </div>
</template>

<script>
  import { employees } from '../../database/queries'
  export default {
    props: {
      page: { type: String, default: 'this is us!' },
    },
    apollo: {
      employees,
    },
    name: "Home"
  }
</script>
