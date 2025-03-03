class ValueError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValueError";
    }
}

function capitalize_last_name(name) {
    if (typeof name !== 'string') {
        throw new TypeError("Input must be a string.");
    }

    const parts = name.trim().split(' ');

    if (parts.length !== 2) {
        throw new ValueError("Input must contain exactly two words.");
    }

    const firstName = parts[0][0].toUpperCase() + parts[0].slice(1).toLowerCase();
    const lastName = parts[1].toUpperCase();

    return `${firstName} ${lastName}`;
}

module.exports = { capitalize_last_name, ValueError };