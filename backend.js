const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('your-sendgrid-api-key');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const msg = {
    to: 'your-email-address',
    from: email,
    subject: 'New contact form submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  sgMail.send(msg)
    .then(() => {
      res.status(200).json({ message: 'Email sent successfully' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Error sending email' });
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));
