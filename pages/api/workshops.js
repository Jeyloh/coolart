let nodemailer = require('nodemailer');
const aws = require('aws-sdk');

aws.config.update({
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SES_ACCESS_SECRET,
  },
  region: 'eu-central-1',
});

const ses = new aws.SES({
  apiVersion: '2010-12-01',
  region: 'eu-central-1',
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SES_ACCESS_SECRET,
  },
});

let transporter = nodemailer.createTransport({
  SES: { ses, aws },
});

export default function handler(req, res) {
  console.log('hi from api/workshops');
  console.log(req, res);

  const html = `<p>Name: <b>${req.body.name}</b></p>
  <p>Phone number: <b>${req.body.phone}</b></p>
  <p>Email: <b>${req.body.email}</b></p>
  <p>Company: <b>${req.body.company}</b></p>
  <p>Date: <b>${req.body.date}</b></p>
  <p>Amount of participants: <b>${req.body.participantsAmount}</b></p>
  <p>Workshop type: <b>${req.body.workshopType}</b></p>
  <p>How did you hear about us: <b>${req.body.refarral}</b></p>
  <p>Extra information: <b>${req.body.extraMessage}</b></p>`;

  var mailOptions = {
    from: 'coolart.no', // sender address
    to: 'jorgenlybeck94@gmail.com', // list of receivers
    subject: 'Workshop request: ' + req.body.workshopType, // Subject line
    html: html, // email body
  };

  // send some mail
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
      res.status(err.responseCode).send(err.response);
    } else {
      console.log('Message sent');
      res.status(200).send('OK');
    }
  });
}
