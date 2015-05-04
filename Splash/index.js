var express = require('express')
var util = require('util');
var bodyParser = require('body-parser');
var app = express(),
    router = express.Router();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded()); // to support URL-encoded bodies


//routes
app.use(express.static('release/'));

//sends an email from contact us page
app.use('/sendemail', function (req, res) {
    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'info.plentycode@gmail.com',
            pass: 'Pl3ntyc0d3'
        }
    });
    transporter.sendMail({
        from: 'info.plentycode@gmail.com',
        to: 'civan.cim@gmail.com',
        subject: 'New Contact Request!',
        html: util.format('<h4>New Contact Request: </h4> <b>Name: </b>%s <br/> <b>Email: </b>%s <br/> <b>Comment: </b>%s', req.body.Name, req.body.Email, req.body.Comments)
    }, function (error, info) {
        var response = {};
        if (error) {
            response.success = false;
            response.message = error;
        } else {
            response.success = true;
            response.message = 'Message sent: ' + info.response;
        }

        //sends response back
        res.send(response);
    });
});

//application port it takes localhost:5000 when is running locally
app.set('port', (process.env.PORT || 5000));
app.listen(app.get('port'), function () {
    console.log("Node app is running at localhost:" + app.get('port'));
});