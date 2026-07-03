const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./project/content/first.txt', 'utf8');
const second = readFileSync('./project/content/second.txt', 'utf8');

console.log(first, second);


writeFileSync(
    './project/content/result-sync.txt',
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'} // Append to the file instead of overwriting it
)
