const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const schedule = require('node-schedule');
const mysql = require('mysql');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});

app.get('/countComments',async function(req, res){
  res.status(200).send({status: 200, message: "commentsCount"});
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bennytescha@gmail.com',
    pass: 'bennytescha100'
  }
});

var mailOptions = {
  from: 'bennytescha@gmail.com',
  to: 'bennytiesto12345@hotmail.com',
  subject: 'Sending Email using Node7.js perro',
  html: '<h1 style="background-color: red; width: 400px; color: yellow;">Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>'
};

// transporter.sendMail(mailOptions, function(error, info){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Email sent: ' + info.response);
//   }
// });

var j = schedule.scheduleJob('*/1 * * * *', () => {
     console.log('This job was supposed to run at rey, but actually ran at ' + new Date());
   });

//   var j = schedule.scheduleJob({ hour: 14, minute: 1, dayOfWeek: 16}, () => {
//     console.log('This job was supposed to run at rey, but actually ran at ' + new Date());
//   });
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "passwd1",
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});