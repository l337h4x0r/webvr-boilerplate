var express = require('express');
var app = express();

app.use(express.static('public'));
app.use('/node_modules', express.static('node_modules'));
app.use('/build', express.static('build'));
app.use('/img', express.static('img'));
app.listen(8081);
