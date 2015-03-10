http = require('http');
endpoints = process.argv.slice(2);
count = 0
responses = [];

for(var i=0; i < endpoints.length; i++) {
  setImmediate(function(index) {
    http.get(endpoints[index], function(response){
      var data = [];
      response.setEncoding('utf8');
      response.on('data', function(string){
        data.push(string);
      });
      response.on('end', function(){
        responses[index] = data.join('');
        printResponses();
      });
    });
  }, i);
}

printResponses = function() {
  count++;
  if(count == 3) {
    console.log(responses.join('\n'));
  }
};

