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

    router.on('/app/overview', ()=> {
        app.currentView = 'overview'
        app.currentRelay = null
    })

    router.on('/app/send', () => {
        if (app.auth) {
            editor.show()
        } else {
            router.navigate('/login')
        }
    })

    router.on('/app/relay/:id', (match) => {
        app.currentRelay = app.relays.filter((val) => {
            return val.id === match.data.id
        })[0]
        app.currentView = 'relay'
        console.log(match.data.id)
    })
})