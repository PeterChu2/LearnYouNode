var fs = require('fs');
var path = require('path');

var result = [];

module.exports = function (directory, filter, callback) {
  fs.readdir(
  directory,
  function readDirCallback (err, list) {
    if(err) {
      return callback(err);
    }
    for( i=0; i<list.length; i++) {
      suffix_extension = '.' + filter;
      if( path.extname(list[i]) === suffix_extension) {
        result.push(list[i]);
      }
    }
    // success
    callback(null, result);
  });
};
