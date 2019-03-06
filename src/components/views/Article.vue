<template>
  <content-wrapper v-bind:page="page" v-bind:lang="lang">
    <row>
      <column v-if="getArticle"><img v-bind:src="getArticle.banner" aria-label="avatar"/>
        <h1>
          {{getArticle.title}}
        </h1>
        <content-text>
          {{getArticle.profile}}
        </content-text>
      </column>
    </row>
  </content-wrapper>
</template>

<script>
  import {getArticle as query} from '../../database/queries'
  import {Column, Row, ContentText} from '../styled/globalStyles'
  import ContentWrapper from '../containers/ContentWrapper.vue'

  export default {
    name: "Article",
    data() {
      return {
        country: this.lang,
      }
    },
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
      ContentWrapper,
      ContentText,
      Column,
      Row
    },
    apollo: {
      getArticle: {
        query,
        variables() {
          return {
            country: this.country,
            id: Math.random()
          }
        }
      }
    }
  }
</script>

<style scoped>

</style>
