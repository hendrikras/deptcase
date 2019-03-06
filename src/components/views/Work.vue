<template>
  <div>
  <styled-title>{{page}}</styled-title>
  <row><column>blaat</column></row>
  </div>
</template>

<script>
  import { Column, Row, StyledTitle } from '../styled/globalStyles'
  import { allCompanies } from '../../database/queries'
  export default {
    components: {
      Column,
      Row,
      StyledTitle
    },
    name: "Work",
    props: ['page'],
    apollo:{ allCompanies }
  }
</script>
