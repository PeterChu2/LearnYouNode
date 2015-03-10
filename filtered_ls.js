var fs = require('fs');
var path = require('path');

fs.readdir(
  process.argv[2],
  function readDirCallback (err, list) {
    for( i=0; i<list.length; i++) {
      suffix_extension = '.' + process.argv[3];
      if( path.extname(list[i]) == suffix_extension) {
        console.log(list[i]);
      }
    }
  });
