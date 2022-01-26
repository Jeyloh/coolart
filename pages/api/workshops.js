const AWS = require('aws-sdk');

const ses = new AWS.SES({
  accessKeyId: process.env.SES_ACCESS_KEY_ID,
  secretAccessKey: process.env.SES_ACCESS_SECRET,
  region: 'eu-central-1',
});

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

  const sesParams = {
    Destination: {
      ToAddresses: ['jorgenlybeck94@gmail.com'],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: html,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Test email',
      },
    },
    Source: 'coolart.no',
  };

  ses
    .sendEmail(sesParams)
    .then(() => {
      console.log('sent mail with ses');
      try {
        res.status(200).json({
          body: message,
          query: req.query,
          cookies: req.cookies,
        });
      } catch (err) {
        console.log(err);
      }
    })
    .catch((err) => {
      console.log('error sending ses mail');
      res.status(400).json({
        body: 'ops',
        query: req.query,
        cookies: req.cookies,
      });
    });

  // https://nodemailer.com/message/
  const message = {
    from: req.body.email,
    to: 'contact@coolart.no',
    subject: 'Workshop request: ' + req.body.workshopType,
    html: html,
  };

  console.log(JSON.stringify(message));
}
