const http = require('http')

function error(err, req, res, next) {
    const { status } = err

    res.status(status)
        .type('application/problem+json')
        .json({
        title: http.STATUS_CODES[status],
        status,
        })
}

module.exports = error