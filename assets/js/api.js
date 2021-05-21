class MessageRelayApi {
    constructor(token) {
        this._token = token
    }

    setToken(newToken) {
        this._token = newToken
    }

    sendMessage(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(data)
                resolve()
            }, 3000)
        })

        /* const structure = {
            relayId,
            content,
            publisch
        } */
    }

    editMessage(data) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log(data)
                resolve()
            }, 3000)
        })
        /* const structure = {
            relayId,
            msgId,
            publish,
            content
        } */

    }
}

const Api = new MessageRelayApi('')