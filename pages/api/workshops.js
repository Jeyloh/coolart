let nodemailer = require('nodemailer');
const aws = require('aws-sdk');

aws.config.update({
  credentials: {
    accessKeyId: process.env.SES_ACCESS_KEY_ID,
    secretAccessKey: process.env.SES_ACCESS_SECRET,
  },
  region: 'eu-central-1',
});

let transporter = nodemailer.createTransport({
  SES: new aws.SES({
    apiVersion: '2010-12-01',
    region: 'eu-central-1',
  }),
  sendingRate: 1,
});

export default function handler(req, res) {
  console.log('hi from api/workshops');
  console.log(req, res);

  // const html = `<p>Name: <b>${req.body.name}</b></p>
  // <p>Phone number: <b>${req.body.phone}</b></p>
  // <p>Email: <b>${req.body.email}</b></p>
  // <p>Company: <b>${req.body.company}</b></p>
  // <p>Date: <b>${req.body.date}</b></p>
  // <p>Amount of participants: <b>${req.body.participantsAmount}</b></p>
  // <p>Workshop type: <b>${req.body.workshopType}</b></p>
  // <p>How did you hear about us: <b>${req.body.refarral}</b></p>
  // <p>Extra information: <b>${req.body.extraMessage}</b></p>`;

  var mailOptions = {
    from: 'dev@coolart.no', // sender address
    to: 'jorgenlybeck94@gmail.com', // list of receivers
    // subject: `Workshop request ${req.body.workshopType}`, // Subject line
    subject: 'Workshop request', // Subject line
    html: '<p>Test html</p>', // email body
    text: 'Test text',
    ses: {
      // optional extra arguments for SendRawEmail
      Tags: [
        {
          Name: 'site_domain',
          Value: 'coolart.no',
        },
      ],
    },
  };

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
