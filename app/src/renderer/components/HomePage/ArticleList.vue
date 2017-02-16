<template>
    <div id="article-list">
        <ul>
            <li v-for="article in articles">
                {{ article.title }} -
                <span class="date">{{ article.createdAt }}</span>
                <span class="close" @click="removeArticle(article)">x</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        methods: {
            removeArticle: function(article) {
                this.$store.commit('removeArticle', article);
            }
        },
        props: [ 'articles' ],
        name: 'article-list'
    }
</script>

<style scoped>
    ul {
        list-style: none;
        display: block;
        margin: 0 auto;
        text-align: left;
        margin-top: 2rem;
        width: 60%;
    }
    li {
        margin: 0.2rem 1rem;
        padding: 0.5rem;
        position: relative;
    }
    span.close {
        cursor: pointer;
        position: absolute;
        right: -0.5rem;
        top: 50%;
        transform: translateY(-50%);
        color: red;
        font-weight: 900;
    }
    span.date {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0.5rem;
        background: #000;
        color: #fff;
        padding: 0.5rem;
        min-width: 5.2rem;
    }
</style>