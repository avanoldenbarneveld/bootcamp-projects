class StringTransformer {
    constructor(inputString) {
        this.inputString = inputString;
        this.result = '';
    }

    toCharArray() {
        this.result = [];
        for (let char of this.inputString) {
            this.result.push(char);
        }
    }

    randomizeCharacters() {
        this.toCharArray();
        for (let i = this.result.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [this.result[i], this.result[j]] = [this.result[j], this.result[i]];
        }
    }

    reverseCharacters() {
        this.result = '';
        for (let i = this.inputString.length - 1; i >= 0; i--) {
            this.result += this.inputString[i];
        }
    }

    removeVowels() {
        this.result = '';
        for (let char of this.inputString) {
            if (!/[aeiouAEIOU]/.test(char)) {
                this.result += char;
            }
        }
    }

    removeConsonants() {
        this.result = '';
        for (let char of this.inputString) {
            if (/[aeiouAEIOU]/.test(char)) {
                this.result += char;
            }
        }
    }

    toWordArray() {
        this.result = this.inputString.split(' ');
    }

    reverseWords() {
        this.toWordArray();
        let reversed = '';
        for (let i = this.result.length - 1; i >= 0; i--) {
            reversed += this.result[i];
            if (i > 0) {
                reversed += ' ';
            }
        }
        this.result = reversed;
    }

    getResult() {
        return this.result;
    }
}

module.exports = StringTransformer;