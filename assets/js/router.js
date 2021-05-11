window.addEventListener('load', () => {
    router = new Navigo('/')
    router.on('/logout', () => {
        app.auth = false

        showToast("Erfolgreich abgemeldet.")
    })
})