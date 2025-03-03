const fetchArticleById = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();

        console.log(`Status: ${response.status}`);
        console.log(`Title: ${data.title}`);
        console.log(`Content: ${data.body}`);

        return data;
    } catch (error) {
        console.error('Error fetching article:', error);
    }
};

const fetchAllArticles = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();

        console.log(`Total articles: ${data.length}`);

        const table = data.map(article => ({
            Title: article.title,
            Content: article.body
        }));

        console.table(table);

        return {
            totalArticles: data.length,
            articles: table
        };
    } catch (error) {
        console.error('Error fetching articles:', error);
        return null;
    }
};

module.exports = {
    fetchArticleById,
    fetchAllArticles
};
