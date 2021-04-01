const express = require('express');
const router = express.Router();
const mailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const email = process.env.EMAIL
const oauthConfig = {
    clientId: process.env.OAUTH_CLIENT_ID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    accessToken: process.env.OAUTH_ACCESS_TOKEN,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN
}

const gmail = mailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        type: "OAuth2",
        user: email,
        clientId: oauthConfig.clientId,
        clientSecret: oauthConfig.clientSecret,
        accessToken: oauthConfig.accessToken,
        refreshToken: oauthConfig.refreshToken,
    }
});

router.post('/', (req, res) => {
    const from = req.body.emailAddress;
    const message = req.body.emailMessage;
    const name = req.body.name;

    if (from && message && name) {
        gmail.sendMail(
            {
                from: from,
                to: email,
                subject: 'Personal Site Email From (' + from + ')',
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