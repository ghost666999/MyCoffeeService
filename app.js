var express = require('express');
var app = express();
console.log("__dirname = " + __dirname);

app.use(express.static('public'));


app.get('/*', function (req, res) {
  console.log("app.get(/) : ");
  res.sendFile(__dirname + '/index.html');
});

/*app.get('/books', function (req, res) {
  console.log("app.get(/) : ");
  res.sendFile(__dirname + '/index.html');
});*/

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

