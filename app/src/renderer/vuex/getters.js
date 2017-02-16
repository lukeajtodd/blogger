export const mainCounter = state => state.counters.main
export const articles = state => state.articles
export const sortedArticles = (state) => {
    let sortedArr = state.articles;
    return sortedArr.sort(function(a, b) {
        a = Math.floor(new Date(a.createdAt.split('-').reverse().join('-')).getTime() / 1000);
        b = Math.floor(new Date(b.createdAt.split('-').reverse().join('-')).getTime() / 1000);
        return a - b;
    });
}
