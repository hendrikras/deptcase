<template>
  <div>
    <styled-title>{{page}}</styled-title>
    <h2 v-if="tagLines"> {{ tagLines[page] }}</h2>
    <slot>
      default content
    </slot>
  </div>
</template>

<script>
  import {tagLines as query, employees} from '../../database/queries'
  import {StyledTitle} from '../styled/globalStyles'

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
    data() {
      return {
        country: this.lang
      }
    },
    components: {
      StyledTitle
    },
    apollo: {
      employees,
      tagLines: {
        query,
        variables() {
          return {
            country: this.country
          }
        }
      }
    },
    name: "Home"
  }
</script>
