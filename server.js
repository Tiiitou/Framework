var express = require('express');
var app = express();
app.use('/projet', express.static(__dirname + '/projet'));
app.get('/', function (req, res) {
res.sendfile(__dirname + '/projet/index.html');
});
app.use('/script', express.static(__dirname + '/projet/script'));
app.use('/style', express.static(__dirname + '/projet/style'));
app.listen(8080);