var fs = require('fs');
buffer = fs.readFileSync(process.argv[2]);
var input = buffer.toString();
// subtract one because there is one less new line than items separated by new lines
console.log(input.split('\n').length - 1);
