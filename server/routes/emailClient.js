const express = require('express');
const router = express.Router();
const mailer = require('nodemailer');
var clientInfo = require('./emailClientInfo.json');

const gmail = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: clientInfo.email,
        pass: clientInfo.password
    }
});

router.post('/', (req, res) => {
    const email = req.body.emailAddress;
    const message = req.body.emailMessage;
    gmail.sendMail(
        {
            to: clientInfo.email,
            subject: 'Personal Site Email From (' + email + ')',
            text: message
        },
        (err, result) => {
            if (err) {
                res.status(400).send(err)
            } else {
                res.send(result.response)
            }
        }
    )
    res.json(req.body)
});

module.exports = router;