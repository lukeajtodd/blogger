<template>
    <div id="articleForm">
        <form @submit="pushArticle" id="newArticleForm">
            <label for="title">
                Title:
                <input 
                    type="text" 
                    name="title" 
                    class="titleInput" 
                    v-model="newTitle">
            </label>
            <label for="content">
                Content:
                <textarea 
                    v-model="newContent" 
                    name="content"
                    class="newContent">
                </textarea>
            </label>
            <button type="submit">PUSH</button>
        </form>
    </div>
</template>

<script>
  export default {
    data() {
        return {
            newId: '',
            newTitle: '',
            newContent: ''
        }
    },
    methods: {
      pushArticle: function(e) {
        e.preventDefault();
        document.getElementById('newArticleForm').reset();
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let title = this.newTitle.toLowerCase();
        this.$store.commit('addArticle', {
          id: title,
          title: this.newTitle,
          content: this.newContent.split(/\r?\n/),
          createdAt: `${(day < 10) ? ("0" + day) : day}-${(month < 10) ? ("0" + month) : month}-${year}`
        });
      }
    },
    props: [ 'articles' ],
    name: 'article-form'
  }
</script>

<style scoped>
form {
    position: relative;
    display: block;
    margin: 0 auto;
    padding: 0;
    margin-bottom: 4rem;
    width: 60%;
}
input, textarea {
    padding: 0.5rem;
    margin: 0.5rem;
}
label {
    display: block;
    text-align: left;
    margin: 1rem;
}
.titleInput {
    width: 100%;
    border: 1px solid #333;
}
.newContent {
    width: 100%;
    height: 8rem;
    border: 1px solid #333;
    resize: none;
}
button {
    position: absolute;
    left: 50%;
    cursor: pointer;
    display: inline-block;
    padding: 0.5rem;
    border: 1px solid #333;
    box-shadow: #333 0px 2px 4px;
    background: #fff;
    font-weight: bold;
    transition: box-shadow 0.3s;
}
button:hover {
    box-shadow: #333 0px 4px 4px;
}
button:active {
    box-shadow: #333 0px 1px 4px;
    outline: none;
}
</style>