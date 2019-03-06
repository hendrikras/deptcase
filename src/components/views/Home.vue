<template>
  <content-wrapper v-bind:page="page" v-bind:lang="lang">
    <row v-for="{id, firstName, lastName, avatar, role, profile} in employees" v-bind:key="id">
      <column>
        <header-title>{{ firstName }} {{ lastName }}</header-title>
        <img v-bind:src="avatar" aria-label="avatar"/></column>
      <column>
        <h4>{{ role }}</h4>
        <content-text>{{ profile }}</content-text>
      </column>
    </row>
  </content-wrapper>
</template>

<script>
  import ContentWrapper from '../containers/ContentWrapper.vue'
  import {Column, ContentText, HeaderTitle, Row} from '../styled/globalStyles'
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
    components: {
      ContentText,
      ContentWrapper,
      Column,
      HeaderTitle,
      Row
    },
    apollo: {
      employees
    },
    name: "Home"
  }
</script>
