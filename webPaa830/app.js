var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('static'))

app.listen(80);
