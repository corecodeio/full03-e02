/* File System */
const fs = require('fs');
const path = require('path');

// READ
const loremPath = path.join('.', path.sep, 'files', 'lorem.txt');
const result = fs.readFileSync(loremPath, 'utf-8');
console.log(result);

// WRITE
// fs.writeFileSync(loremPath, ' 🤨👻⏱️⭐ ');
fs.writeFileSync(loremPath, ' 🤨👻⏱️⭐ ', { flag: 'a' });
console.log('Write finish...');
