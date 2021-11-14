export default function handler(req, res) {
  console.log(req, res);

  // https://nodemailer.com/message/
  const message = {
    from: req.body.email,
    to: 'contact@coolart.no',
    subject: 'Workshop request: ' + req.body.workshopType,
    html: `
        <p>Name: <b>${req.body.name}</b></p>
        <p>Phone number: <b>${req.body.phone}</b></p>
        <p>Email: <b>${req.body.email}</b></p>
        <p>Company: <b>${req.body.company}</b></p>
        <p>Date: <b>${req.body.date}</b></p>
        <p>Amount of participants: <b>${req.body.participantsAmount}</b></p>
        <p>Workshop type: <b>${req.body.workshopType}</b></p>
        <p>How did you hear about us: <b>${req.body.refarral}</b></p>
        <p>Extra information: <b>${req.body.extraMessage}</b></p>
      `,
  };

  try {
    res.status(200).json({
      body: message,
      query: req.query,
      cookies: req.cookies,
    });
  } catch (err) {
    console.log(err);
  }
}
