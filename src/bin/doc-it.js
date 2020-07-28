#! /usr/bin/env node

console.log('doc-it 12345')


const fs = require('fs')
let template = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React in TypeScript</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>`
const data = new Uint8Array(Buffer.from(template));
fs.writeFile('output.html', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
