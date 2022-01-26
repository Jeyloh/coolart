var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

// const ses = new AWS.SES({
//   accessKeyId: process.env.SES_ACCESS_KEY_ID,
//   secretAccessKey: process.env.SES_ACCESS_SECRET,
//   region: 'eu-central-1',
// });

export default function handler(req, res) {
  console.log('hi from api/workshops');
  console.log(req, res);

  const html = `
  <p>Name: <b>${req.body.name}</b></p>
  <p>Phone number: <b>${req.body.phone}</b></p>
  <p>Email: <b>${req.body.email}</b></p>
  <p>Company: <b>${req.body.company}</b></p>
  <p>Date: <b>${req.body.date}</b></p>
  <p>Amount of participants: <b>${req.body.participantsAmount}</b></p>
  <p>Workshop type: <b>${req.body.workshopType}</b></p>
  <p>How did you hear about us: <b>${req.body.refarral}</b></p>
  <p>Extra information: <b>${req.body.extraMessage}</b></p>
`;

  var mailOptions = {
    from: 'Coolart<coolart.no>', // sender address
    to: 'jorgenlybeck94@gmail.com', // list of receivers
    subject: 'Workshop request: ' + req.body.workshopType, // Subject line
    html: html, // email body
  };

  var smtpTransporter = nodemailer.createTransport({
    port: 465,
    host: 'eu-central-1',
    secure: true,
    auth: {
      user: process.env.SES_ACCESS_KEY_ID,
      pass: process.env.SES_ACCESS_SECRET,
    },
    debug: true,
  });

  smtpTransporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(error.responseCode).send(error.response);
    } else {
      console.log('Message sent: ' + info.response);
      res.status(200).send(info);
    }
  });
}
