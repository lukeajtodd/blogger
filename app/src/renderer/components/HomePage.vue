<template>
  <div>
    <header>
      <img src="./logo.png" alt="">
      <h1>Blogger</h1>
      <span id="close">x</span>
    </header>
    <article-list :articles="articles"></article-list>
    <article-form :article="articles"></article-form>
  </div>
</template>

<script>
  import ArticleList from './HomePage/ArticleList'
  import ArticleForm from './AddArticle/ArticleForm'
  export default {
    components: {
      ArticleList,
      ArticleForm
    },
    props: [ 'articles' ],
    name: 'home-page'
  }
</script>

<style scoped>
  header {
    width: 100vw;
    background: #000;
    position: relative;
    padding-top: 20px;
    -ms-overflow-style: scrollbar;
    -webkit-app-region: drag;
  }
  h1 {
    color: #fff;
    display: inline-block;
    margin: 1rem;
    margin-left: 4.5rem;
    padding-bottom: 1rem;
  }
  header:after {
    content: "";
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 1.6rem;
    height: 1.6rem;
    background: #fff;
    padding: 0.5rem;
    border-radius: 50%;
    z-index: 1;
  }
  img {
    width: 1.6rem;
    padding: 0.5rem;
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
  }
</style>
