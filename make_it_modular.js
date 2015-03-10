var filter_module = require('./filter_module');
var dir = process.argv[2];
var filter = process.argv[3];
filter_module(
  dir,
  filter,
  function (err, data) {
    if(err)
      console.error("error occured in filter module:", error); // return if error occurs
    else
      data.forEach(function (file) {
        console.log(file);
      })
  });
