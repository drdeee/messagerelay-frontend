window.addEventListener('load', () => {
    router = new Navigo('/')
    router.on('/logout', () => {
        app.auth = false

        showToast("Erfolgreich abgemeldet.", () => {
            resetID = setTimeout(() => {
                router.navigate('/')
                resetID = null
            }, 1000)
        })
    })

    router.on('/login', () => {
        app.auth = true
        router.navigate('/app/overview')
    })

    router.on('/app/overview', () => {
        app.currentView = 'overview'
        app.currentRelay = null
    })

    router.on('/app/send', (match) => {
        if (app.auth) {
            app.currentView = 'sendmessage'
            setTimeout(() => {
                editor.show()
                if (app.currentAction.type === 'editMsg') {
                    editor.setContent(app.currentAction.data.msg)
                }
            }, 100)
        } else {
            router.navigate('/login')
        }
    })

    router.on('/app/relay/:id', (match) => {
        console.log('try')
        app.currentRelay = app.relays.filter((val) => {
            return val.id === match.data.id
        })[0]
        app.currentRelay.messages = [
            {
                id: "ijdiasdasd",
                author: 'Deee',
                content: 'Hi, <b>Hallo</b>',
                time: '12. 12.',
                isPublished: true
            },
            {
                id: "ijdsd",
                author: 'Deee',
                content: 'Hi, <b>Hallo</b>',
                time: '12. 12.',
                isPublished: true
            },
            {
                id: "ijdiassd",
                author: 'Deee',
                content: 'Hi, <b>Hallo</b> Hi',
                time: '12. 12.',
                isPublished: false
            }
        ]
        app.currentRelay.canSend = true
        app.currentRelay.canManage = true
        app.currentView = 'relay'
    })

    router.on('/app/relay/:id/messages', () => {
        app.currentView = 'relayMsgs'
    })

    router.on('/app/relay/:id/endpoints', () => {
        app.currentView = 'relayEndpoints'
    })
})