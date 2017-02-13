<template>
  <div id="#app">
    <router-view :articles="articles"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        articles: this.$store.state.articles
      }
    }
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Lato:300);

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    align-items: top;
    background-position: center;
    display: flex;
    font-family: Lato, Helvetica, sans-serif;
    justify-content: left;
    text-align: left;
  }
</style>
