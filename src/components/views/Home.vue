<template>
  <div>
    <h1> This is us! </h1>
    <div v-for="{id, firstName, lastName } in employees" v-bind:key="id">
      <div>{{ firstName }} {{ lastName  }} </div>
    </div>
  </div>
</template>

<script>
  import { employees } from '../../database/queries'
  export default {
    apollo: {
      employees,
    },
    name: "Home"
  }
</script>

