var express = require('express')
var util = require('util');
var bodyParser = require('body-parser');
var app = express(),
    router = express.Router();

app.use(bodyParser.json({ extended: true }));       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies

//routes
app.use(express.static(__dirname + '/release/'));

//application port it takes localhost:5000 when is running locally
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
});