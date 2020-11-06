const express = require('express');
const morgan = require('morgan')

const app = express();
const port = process.env.PORT || 3002;

const email = require('./routes/emailClient')

const logFormat = morgan(function developmentFormatLine(tokens, req, res) {
    const status = res.statusCode
    const method = req.method
    const red = 31;
    const yellow = 33;
    const blue = 36;
    const green = 32;

    const methodColorMap = new Map([
            ['DELETE', red],
            ['PUT', yellow],
            ['GET', blue],
            ['POST', green]
        ]
    )

    // get status color
    const statusColor = status >= 500 ? red // red
        : status >= 400 ? yellow // yellow
            : status >= 300 ? blue // cyan
                : status >= 200 ? green // green
                    : 0 // no color

    // get method color
    const methodColor = methodColorMap.get(method)

    // get colored function
    let fn = developmentFormatLine[statusColor, methodColor]

    const body = method !== "GET" ? JSON.stringify(req.body, null, 2) : null;

    if (!fn) {
        let format = '\x1b[' + methodColor + 'm:method ' +
            '\x1b[0m:url ' +
            '\x1b[' + statusColor + 'm:status\x1b' +
            '[0m :response-time ms - :res[content-length]\x1b[0m'

        if (body) {
            format += '\n' + body + '\n';
        }

        fn = developmentFormatLine[statusColor, methodColor] = morgan.compile(format)
    }

    return fn(tokens, req, res)
})

app.use(logFormat)
app.use(express.json());
app.use('/contactMe', email)

app.listen(port, () => console.log('*** Server started. Listening on port %d ***', port));

module.exports = app;