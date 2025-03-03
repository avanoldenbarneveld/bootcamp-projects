const { fetchAllArticles, fetchArticleById } = require('./script');

global.fetch = jest.fn();

describe('fetchAllArticles', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('should fetch and return the correct number of articles', async () => {
        fetch.mockResolvedValueOnce({
            json: async () => [
                { userId: 1, id: 1, title: 'Article 1', body: 'Content 1' },
                { userId: 1, id: 2, title: 'Article 2', body: 'Content 2' }
            ]
        });
        const result = await fetchAllArticles();
        expect(result.totalArticles).toBe(2);
    });

    it('should return the correct article titles and contents', async () => {
        fetch.mockResolvedValueOnce({
            json: async () => [
                { userId: 1, id: 1, title: 'Article 1', body: 'Content 1' },
                { userId: 1, id: 2, title: 'Article 2', body: 'Content 2' }
            ]
        });
        const result = await fetchAllArticles();
        expect(result.articles).toEqual([
            { Title: 'Article 1', Content: 'Content 1' },
            { Title: 'Article 2', Content: 'Content 2' }
        ]);
    });

    it('should log the correct number of articles', async () => {
        fetch.mockResolvedValueOnce({
            json: async () => [
                { userId: 1, id: 1, title: 'Article 1', body: 'Content 1' },
                { userId: 1, id: 2, title: 'Article 2', body: 'Content 2' }
            ]
        });
        console.log = jest.fn();
        await fetchAllArticles();
        expect(console.log).toHaveBeenCalledWith('Total articles: 2');
    });

    it('should handle fetch errors gracefully', async () => {
        fetch.mockRejectedValueOnce('API is down');
        console.error = jest.fn();

        const result = await fetchAllArticles();
        expect(result).toBeNull();
        expect(console.error).toHaveBeenCalledWith('Error fetching articles:', 'API is down');
    });

    it('should return empty data when no articles are available', async () => {
        fetch.mockResolvedValueOnce({
            json: async () => []
        });
        const result = await fetchAllArticles();
        expect(result.totalArticles).toBe(0);
        expect(result.articles).toEqual([]);
    });

    it('should verify that fetch is called with the correct URL', async () => {
        fetch.mockResolvedValueOnce({
            json: async () => []
        });
        await fetchAllArticles();
        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
    });
});

describe('fetchArticleById', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    it('should fetch a single article and log the status, title, and content', async () => {
        fetch.mockResolvedValueOnce({
            status: 200,
            json: async () => ({ id: 1, title: 'Article 1', body: 'Content 1' })
        });
        console.log = jest.fn();
        
        const result = await fetchArticleById(1);

        expect(result).toEqual({ id: 1, title: 'Article 1', body: 'Content 1' });
        expect(console.log).toHaveBeenCalledWith('Status: 200');
        expect(console.log).toHaveBeenCalledWith('Title: Article 1');
        expect(console.log).toHaveBeenCalledWith('Content: Content 1');
    });

    it('should handle fetch errors gracefully in fetchArticleById', async () => {
        fetch.mockRejectedValueOnce('API is down');
        console.error = jest.fn();

        const result = await fetchArticleById(1);
        expect(result).toBeUndefined();
        expect(console.error).toHaveBeenCalledWith('Error fetching article:', 'API is down');
    });

    it('should verify that fetch is called with the correct URL for fetchArticleById', async () => {
        fetch.mockResolvedValueOnce({
            status: 200,
            json: async () => ({ id: 1, title: 'Article 1', body: 'Content 1' })
        });

        await fetchArticleById(1);
        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
    });
});
