const express = require('express');

const app = express();
const port = process.env.PORT || 3002;

const email = require('./routes/emailClient')

app.use(express.json());
app.use('/contactMe', email)

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;