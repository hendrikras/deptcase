<template>
  <content-wrapper v-bind:page="page" v-bind:lang="lang">
    <input/>
  </content-wrapper>
</template>

<script>
  import ContentWrapper from '../containers/ContentWrapper.vue'
  export default {
    props: { page: { type: String, default: '' }, lang: { type: String, default: '' } } ,
    components: { ContentWrapper },
    name: "Contact"
  }
</script>
