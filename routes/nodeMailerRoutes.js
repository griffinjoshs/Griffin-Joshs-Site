const nodemailer = require('nodemailer');
// var path = require("path");
// const fs = require('fs');
// const bodyParser = require('body-parser');
// const exphbs = require('express-handlebars');
module.exports = function (app) {
  
  app.post('/send', (req, res) => {
    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone: ${req.body.phone}</li>
    <li>Subject: ${req.body.subject}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
    `;
  
  // gmail
  const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'griffinjoshs99@gmail.com',
    pass: 'sozarzbbhmizmpko' // naturally, replace both with your real credentials or an application-specific password
  },
  tls:{
          rejectUnauthorized:false
        }
  });
  
  const mailOptions = {
  from: `${req.body.email}`,
  to: 'griffinjoshs99@gmail.com',
  subject: `${req.body.subject}`,
  text: `${req.body.message}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
  console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    console.log(output);
    res.redirect('/')
    console.log('Email sent: ' + info.response);
  }
  });
  });
}