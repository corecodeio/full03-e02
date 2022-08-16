/* Path */
const path = require('path');

// separator
console.log(path.sep);

// join
const loremPath = path.join('.', 'files', 'lorem.txt');
console.log(loremPath);

// basename
console.log(path.basename(loremPath));

// relative path: .\files\lorem.txt
// absolute path: C:\Users\yosef\sessions\node01\full03-e02\files\lorem.txt

// resolve
const loremPathAbs = path.resolve(__dirname, 'files', 'lorem.txt');
console.log(loremPathAbs);
