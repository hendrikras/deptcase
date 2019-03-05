<template>
  <styled-title>{{page}}</styled-title>
</template>

<script>
  import { StyledTitle } from '../styled/globalStyles'
  import { allCompanies } from '../../database/queries'
  export default {
    components: {
      StyledTitle
    },
    name: "Work",
    props: ['page'],
    apollo:{ allCompanies }
  }
</script>
