const fetchAllArticles = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            console.log(`Total articles: ${data.length}`);
            
            data.forEach((article, index) => {
                console.log(`${index + 1}. ${article.title}`);
            });

            const table = data.map(article => ({
                Title: article.title,
                Content: article.body
            }));

            console.table(table);

            return {
                totalArticles: data.length,
                articles: table
            };
        })
        .catch(error => {
            console.error('Error fetching articles:', error);
            return null;
        });
};

module.exports = {
    fetchAllArticles
};
