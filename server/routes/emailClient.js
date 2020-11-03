const express = require('express');
const router = express.Router();
const mailer = require('nodemailer');
const clientInfo = require('./emailClientInfo.json');

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
    const name = req.body.name;

    if (email && message && name) {
        gmail.sendMail(
            {
                to: clientInfo.email,
                subject: 'Personal Site Email From (' + email + ')',
                text: message
                    + '\n\nSincerely,\n\n'
                    + name
            },
            (err) => {
                if (err) {
                    res
                        .status(400)
                        .send(err)
                } else {
                    res
                        .status(200)
                        .json(
                            {
                                message: "Email sent successfully!"
                            }
                        )
                }
            }
        )
    } else {
        res
            .status(400)
            .json({
                error: "Missing one of the following required attributes. emailMessage, name or message"
            })
    }
});

module.exports = router;