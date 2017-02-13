<template>
  <div>
    <h1>Blogger</h1>
    <article-list :articles="articles"></article-list>
  </div>
</template>

<script>
  import ArticleList from './HomePage/ArticleList'
  export default {
    components: {
      ArticleList
    },
    props: [ 'articles' ],
    name: 'home-page'
  }
</script>

<style scoped>
  h1 {
    margin: 1rem;
  }
</style>
