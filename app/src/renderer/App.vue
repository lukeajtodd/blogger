<template>
  <div id="#app">
    <router-view :articles="this.getArticles"></router-view>
  </div>
</template>

<script>
  export default {
    computed: {
      getArticles: function() {
          return this.$store.getters.sortedArticles;
        }
    }
  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Bungee+Inline|Raleway');

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body { height: 100%; }

  body {
    background-position: center;
    font-family: 'Raleway', Helvetica, sans-serif;
  }

  h1 {
    font-family: 'Bungee Inline', Helvetica, sans-serif;
  }
</style>
