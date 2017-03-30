var express = require('express');
var app = express();
var nodemailer = require("nodemailer");
var bodyparser = require('body-parser');
var ejs = require('ejs');
var path = require('path');
app.set('view engine', 'ejs');


app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/skill', function(req, res) {
  res.render('pages/skill');
});

app.get('/project', function(req, res) {
  res.render('pages/project');
});

app.get('/contact', function(req, res) {
  res.render('pages/contact');
});

app.get('/send', function(req, res){
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

		var mailOptions={
	   from : req.query.from,
	   to:req.query.to,
	   subject : req.query.subject,
	   text : req.query.text,
	}
	console.log(mailOptions);
	smtpTransport.sendMail(mailOptions, function(error, response){
	if(error){
	console.log(error);
	res.end("error");
	}else{
	console.log("Message sent: "+ response.message);
	res.end("sent");
	}
	});
});

var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "swangchuk98@gmail.com",
        pass: "Freetibet2012"
    }
});

app.listen(3000);
console.log('server listen on port 3000!');
