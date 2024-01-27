let x = 1
console.log('hello node!');
console.log(`X = ${x}`);

const fs = require('fs')
fs.readFile('db.json', (err, data) => {
    console.log(data.toString());
})