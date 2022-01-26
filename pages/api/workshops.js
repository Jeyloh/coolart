var nodemailer = require('nodemailer');

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

  // const sesParams = {
  //   Destination: {
  //     ToAddresses: ['jorgenlybeck94@gmail.com'],
  //   },
  //   Message: {
  //     Body: {
  //       Html: {
  //         Charset: 'UTF-8',
  //         Data: html,
  //       },
  //     },
  //     Subject: {
  //       Charset: 'UTF-8',
  //       Data: 'Test email',
  //     },
  //   },
  //   Source: 'coolart.no',
  // };

  // ses
  //   .sendEmail(sesParams)
  //   .then(() => {
  //     console.log('sent mail with ses');

  //   })
  //   .catch((err) => {
  //     console.log('error sending ses mail');

  //   });

  // https://nodemailer.com/message/

  var transport = nodemailer.createTransport('SMTP', {
    // Yes. SMTP!
    host: 'email-smtp.eu-central-1.amazonaws.com', // Amazon email SMTP hostname
    secureConnection: true, // use SSL
    port: 2587, // port for secure SMTP
    auth: {
      user: process.env.SES_USERNAME, // Use from Amazon Credentials
      pass: process.env.SES_SECRET, // Use from Amazon Credentials
    },
  });

  var mailOptions = {
    from: 'Coolart <coolart.no>', // sender address
    to: 'jorgenlybeck94@gmail.com', // list of receivers
    subject: 'Workshop request: ' + req.body.workshopType, // Subject line
    html: html, // email body
  };

  // send mail with defined transport object
  transport.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error);

      res.status(400).json({
        body: 'ops',
        query: req.query,
        cookies: req.cookies,
      });
    } else {
      console.log('Message sent!');
      res.status(200).json({
        body: mailOptions,
        query: req.query,
        cookies: req.cookies,
      });
    }

    transport.close(); // shut down the connection pool, no more messages
  });
}
