function JSONIntent(status, json) {
    return {
        status,
        json,
    }
}

function RequestIntent(method, url, headers, body) {
    return {
        method,
        url,
        ...headers && { headers },
        ...body && { body },
    }
}

module.exports = {
    JSONIntent,
    RequestIntent,
}