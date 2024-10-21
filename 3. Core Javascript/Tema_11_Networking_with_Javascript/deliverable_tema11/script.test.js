const { fetchAllArticles } = require('./script');

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([
            { userId: 1, id: 1, title: 'Article 1', body: 'Content 1' },
            { userId: 1, id: 2, title: 'Article 2', body: 'Content 2' }
        ])
    })
);

describe('fetchAllArticles', () => {
    it('should fetch and return the correct number of articles', async () => {
        const result = await fetchAllArticles();
        expect(result.totalArticles).toBe(2);
    });

    it('should return the correct article titles and contents', async () => {
        const result = await fetchAllArticles();
        expect(result.articles).toEqual([
            { Title: 'Article 1', Content: 'Content 1' },
            { Title: 'Article 2', Content: 'Content 2' }
        ]);
    });

    it('should log the correct number of articles', async () => {
        console.log = jest.fn();
        await fetchAllArticles();
        expect(console.log).toHaveBeenCalledWith('Total articles: 2');
    });

    it('should handle fetch errors gracefully', async () => {
        console.error = jest.fn();

        global.fetch.mockImplementationOnce(() =>
            Promise.reject('API is down')
        );

        const result = await fetchAllArticles();

        expect(result).toBeNull();

        expect(console.error).toHaveBeenCalledWith('Error fetching articles:', 'API is down');
    });

    it('should return empty data when no articles are available', async () => {
        global.fetch.mockImplementationOnce(() =>
            Promise.resolve({ json: () => Promise.resolve([]) })
        );
        const result = await fetchAllArticles();
        expect(result.totalArticles).toBe(0);
        expect(result.articles).toEqual([]);
    });

    it('should verify that fetch is called with the correct URL', async () => {
        await fetchAllArticles();
        expect(global.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
    });
});
