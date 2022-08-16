/* File System */
const fs = require('fs');
const path = require('path');

// READ
const loremPath = path.join('.', path.sep, 'files', 'lorem.txt');
fs.readFile(loremPath, 'utf-8', (error, data) => {
  if (error) console.log(`Read Error: ${error}`);
  console.log('<< Read Finish >>');
  console.log(data);
});
console.log(`Read Finish?`);

// WRITE
// fs.writeFile(loremPath, ' 🤨👻⏱️⭐ ', (error) => {
//   if (error) console.log(`Write Error: ${error}`);
//   console.log('Write finish...');
// });
fs.writeFile(loremPath, ' 🤨👻⏱️⭐ ', { flag: 'a' }, (error) => {
  if (error) console.log(`Write Error: ${error}`);
  console.log('<< Write Finish >>');
});
console.log(`Write Finish?`);
