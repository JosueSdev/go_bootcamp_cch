function JSONIntent(status, json) {
    return {
        status,
        json,
    }
}

function RequestIntent(method, url, headers, data) {
    return {
        method,
        url,
        ...headers && { headers },
        ...data && { data },
    }
}

module.exports = {
    JSONIntent,
    RequestIntent,
}