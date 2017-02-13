<template>
    <div id="article-list">
        <ul>
            <li v-for="article in articles">
                {{ article.title }} -
                <span class="date">{{ article.createdAt }}</span>
                <a class="edit">EDIT</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: [ 'articles' ],
        name: 'article-list'
    }
</script>

<style scoped>
    ul {
        list-style: none;
        display: inline-block;
        text-align: right;
    }
    li {
        margin: 0.2rem 1rem;
        padding: 0.5rem;
    }
    .date {
        background: #000;
        color: #fff;
        padding: 0.5rem;
    }
    .edit {
        font-weight: bold;
        font-family: Arial;
        margin-left: 0.5rem;
    }
</style>