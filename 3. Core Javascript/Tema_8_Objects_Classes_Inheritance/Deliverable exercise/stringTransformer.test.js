const StringTransformer = require('./stringTransformer');

test('Convert string to character array', () => {
    const transformer = new StringTransformer("Hello");
    transformer.toCharArray();
    expect(transformer.getResult()).toEqual(['H', 'e', 'l', 'l', 'o']);
});

test('Randomize characters', () => {
    const transformer = new StringTransformer("abcd");
    transformer.randomizeCharacters();
    const result = transformer.getResult();
    expect(result.length).toBe(4);
    expect(result).toContain('a');
    expect(result).toContain('b');
    expect(result).toContain('c');
    expect(result).toContain('d');
});

test('Reverse characters', () => {
    const transformer = new StringTransformer("Hello");
    transformer.reverseCharacters();
    expect(transformer.getResult()).toBe("olleH");
});

test('Remove vowels', () => {
    const transformer = new StringTransformer("Hello");
    transformer.removeVowels();
    expect(transformer.getResult()).toBe("Hll");
});

test('Remove consonants', () => {
    const transformer = new StringTransformer("Hello");
    transformer.removeConsonants();
    expect(transformer.getResult()).toBe("eo");
});

test('Convert to word array', () => {
    const transformer = new StringTransformer("Hello World");
    transformer.toWordArray();
    expect(transformer.getResult()).toEqual(['Hello', 'World']);
});

test('Reverse words', () => {
    const transformer = new StringTransformer("Hello World");
    transformer.reverseWords();
    expect(transformer.getResult()).toBe("World Hello");
});
