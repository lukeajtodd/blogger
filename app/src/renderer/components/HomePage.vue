<template>
  <div>
    <header>
      <img src="./firebaselogo.png" alt="">
      <h1>BaseOnFire</h1>
    </header>
    <span id="minimize" @click="minWindow">-</span>
      <span id="maximize" @click="maxWindow">+</span>
      <span id="close" @click="closeWindow">x</span>
    <article-list :articles="articles"></article-list>
    <article-form :article="articles"></article-form>
  </div>
</template>

<script>
  import ArticleList from './HomePage/ArticleList';
  import ArticleForm from './AddArticle/ArticleForm';
  import { remote } from 'electron'
  export default {
    components: {
      ArticleList,
      ArticleForm
    },
    methods: {
      closeWindow() {
        let window = remote.getCurrentWindow();
        window.close();
      },
      minWindow() {
        let window = remote.getCurrentWindow();
        window.minimize();
      },
      maxWindow() {
        let window = remote.getCurrentWindow();
        !window.isMaximized() ? window.maximize() : window.unmaximize();
      }
    },
    props: [ 'articles' ],
    name: 'home-page'
  };
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
    line-height: 1;
  }
  header:after {
    content: "";
    position: absolute;
    left: 1.1rem;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    width: 1.4rem;
    height: 1.8rem;
    background: #fff;
    padding: 0.5rem;
    /*border-radius: 50%;*/
    z-index: 1;
  }
  img {
    width: 3rem;
    padding: 0.5rem;
    position: absolute;
    left: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
  }
  #close, #minimize, #maximize {
    color: #fff;
    position: absolute;
    top: 0;
    margin: 0;
    padding: 0.1rem;
    cursor: pointer;
    font-size: 1rem;
    -webkit-app-region: no-drag;
    line-height: 1;
  }
  #close {
    right: 0.5rem;
    top: 0.25rem;
  }
  #maximize {
    right: 1.7rem;
    top: 0.1rem;
    font-size: 1.5rem;
  }
  #minimize {
    right: 3rem;
    font-size: 1.5rem;
  }
</style>
