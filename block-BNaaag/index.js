var {readFile, readFileSync} = require('fs');

readFile('./content.md', 'utf-8', (err, content) => {
    console.log(err, content);
})

var result = readFileSync('./content.md', 'utf-8');

console.log(result);

let buff1 = Buffer.alloc(10);
buff1.write('Welcome to Buffer');

console.log(buff1);