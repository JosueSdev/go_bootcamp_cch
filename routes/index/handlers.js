const { JSONIntent } = require('../../util/intent')

function getIndex() {
    return JSONIntent(200, { message: 'Hello World!' })
}

module.exports = {
    getIndex,
}