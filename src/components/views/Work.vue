<template>
  <content-wrapper v-bind:page="page" v-bind:lang="lang">
    <row v-for="{id, name, industry, banner, profile} in allCompanies" v-bind:key="id">
      <column>
        <row>      <column>
          <h1>{{name}}</h1>
        </column>
          <column>
            <h2>{{industry}}</h2>
          </column></row>

        <img v-bind:src="banner" aria-label="avatar"/>
        <content-text>{{profile}}</content-text>
      </column>
    </row>
  </content-wrapper>
</template>

<script>
  import ContentWrapper from '../containers/ContentWrapper.vue'
  import {Column, ContentText, Row} from '../styled/globalStyles'
  import {allCompanies} from '../../database/queries'

  export default {
    name: "Work",
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
      Row
    },
    apollo: {
      allCompanies
    },
  }
</script>
