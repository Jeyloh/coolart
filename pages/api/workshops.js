let nodemailer = require('nodemailer');
const aws = require('aws-sdk');

aws.config.update({
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SES_ACCESS_SECRET,
  },
  region: 'eu-central-1',
});

export default function handler(req, res) {
  console.log('hi from api/workshops');
  console.log(req, res);

  const data = JSON.parse(req.body);

  const html = `<p>Name: <b>${data.name}</b></p>
  <p>Phone number: <b>${data.phone}</b></p>
  <p>Email: <b>${data.email}</b></p>
  <p>Company: <b>${data.company}</b></p>
  <p>Date: <b>${data.date}</b></p>
  <p>Amount of participants: <b>${data.participantsAmount}</b></p>
  <p>Workshop type: <b>${data.workshopType}</b></p>
  <p>How did you hear about us: <b>${data.refarral}</b></p>
  <p>Extra information: <b>${data.extraMessage}</b></p>`;

  const to = ['dev@coolart.no'];
  if (data.email) {
    to.push(data.email);
  }
  const mailOptions = {
    from: 'CoolArt <contact@coolart.no>', // sender address
    to, // list of receivers
    // subject: `Workshop request ${data.workshopType}`, // Subject line
    subject: 'Workshop Request - ' + data.workshopType, // Subject line
    html, // email body
    ses: {
      // optional extra arguments for SendRawEmail
      Tags: [
        {
          Name: 'sitedomain',
          Value: 'coolart',
        },
      ],
    },
  };

  let transporter = nodemailer.createTransport({
    SES: new aws.SES({
      apiVersion: '2010-12-01',
      region: 'eu-central-1',
    }),
    sendingRate: 1,
  });

  // Push next messages to Nodemailer
  transporter.once('idle', () => {
    if (transporter.isIdle()) {
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
  });
}
