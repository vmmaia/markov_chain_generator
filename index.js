const fs = require('fs');

const authors = ['dickens', 'lovecraft', 'doyle'];

const AUTHOR = authors.find((a) => a === process.argv[2])
    ? process.argv[2]
    : 'dickens';
const SENTENCE_LENGTH = parseInt(process.argv[3]) || 20;

// Read the sample text from a file
const text = fs.readFileSync(`samples/${AUTHOR}.txt`, 'utf-8');

// Tokenize the text and remove stopwords and punctuation
const tokens = text
    .split(/\s+/)
    .map((word) => word.replace(/[\W_]+/g, ''))
    .filter((word) => word !== '');

// Build the Markov chain model
const chain = {};

for (let i = 0; i < tokens.length; i++) {
    const current = tokens[i];
    const next = tokens[i + 1];

    if (!chain[current]) {
        chain[current] = {};
    }

    if (!chain[current][next]) {
        chain[current][next] = 0;
    }

    chain[current][next]++;
}

// Generate new text
let seed = 'the';
const output = [seed];

for (let i = 0; i < SENTENCE_LENGTH - 1; i++) {
    const choices = Object.keys(chain[seed]);
    const weights = Object.values(chain[seed]);
    const index = weightedRandom(weights);
    seed = choices[index];
    output.push(seed);
}

// Output the text
console.log(output.join(' '));

// Utility function for weighted random selection
function weightedRandom(weights) {
    const totalWeight = weights.reduce((sum, weight) => sum + weight, 0);
    let random = Math.random() * totalWeight;

    for (let i = 0; i < weights.length; i++) {
        if (random < weights[i]) {
            return i;
        }

        random -= weights[i];
    }
}
