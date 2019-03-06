<template>
  <content-wrapper v-bind:page="page" v-bind:lang="lang">
    work
  </content-wrapper>
</template>

<script>
  import { allCompanies } from '../../database/queries'
  export default {
    components: {
    },
    name: "Work",
    props: ['page'],
    apollo:{ allCompanies,  }
  }
</script>
