app = new Vue({
    el: '#app',
    data: {
        name: 'MessageRelay',
        support: 'https://google.de',
        currentView: 'relayEndpoints',
        auth,
        user: {
            name: 'Elias Bistry',
            permissions: {
                sendMessages: true,
                viewArchieve: true,
                manageUsers: true,
                manageCategories: true
            }
        },
        relays: [
            {
                id: 'ihdiashdiasd-asdiadiashdi-asdhaisdhiasd',
                name: 'Testrelay'
            },
            {
                id: 'ihdiashdiasd-asdsdfsdfsdf-sdhiasd',
                name: 'Testrelay2'
            },
            {
                id: 'ihdiashdiasd-asdiadiashdi-asdhaisdhiasd',
                name: 'Testrelay'
            },
            {
                id: 'ihdiashdiasd-asdsdfsdfsdf-sdhiasd',
                name: 'Testrelay2'
            },
            {
                id: 'ihdiashdiasd-asdiadiashdi-asdhaisdhiasd',
                name: 'Testrelay'
            },
            {
                id: 'ihdiashdiasd-asdsdfsdfsdf-sdhiasd',
                name: 'Testrelay2'
            },
            {
                id: 'ihdiashdiasd-asdiadiashdi-asdhaisdhiasd',
                name: 'Testrelay'
            },
            {
                id: 'ihdiashdiasd-asdsdfsdfsdf-sdhiasd',
                name: 'Testrelay2'
            }
        ],
        currentRelay: {
            id: 'ihdiashdiasd-asdsdfsdfsdf-sdhiasd',
            name: 'Testrelay2',
            messages: [
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
            ],
            canSend: true,
            canManage: true
        },
        currentAction: {
            data: {}
        }
    },
    methods: {
        login: function () {
            router.navigate('/login')
        },
        logout: function () {
            router.navigate('/logout')
        },
        goBack: function (event) {
            event.preventDefault()
            switch (this.currentView) {
                case 'sendmessage':
                    this.currentAction = {
                        data: {}
                    }
                    editor.close()
                case 'relayMsgs':
                    console.log('/app/relay/' + this.currentRelay.id)
                    router.navigate('/app/relay/' + this.currentRelay.id)
                    break
                case 'relay':
                    router.navigate('/app/overview')
                    break
            }
        },
        goToRelayOverview: function (id) {
            router.navigate('/app/relay/' + id)
        },
        route: function (route) {
            router.navigate(route)
        },
        editMessage: function (id) {
            this.currentAction.type = 'editMsg'
            const message = this.currentRelay.messages.filter((msg) => {
                return msg.id === id
            })[0]
            this.currentAction.data.id = message.id
            this.currentAction.data.msg = message.content
            this.currentAction.data.isPublished = message.isPublished
            router.navigate('/app/send')
            //editor.setContent(message.content)
        },
        deleteMessage: function (id) {
            console.log(id)
        },
        send: function (publish) {
            for (let element of document.getElementsByClassName('msg-submit'))
                element.disabled = true
            if (this.currentAction.type === 'editMsg') {
                Api.editMessage({
                    msgId: this.currentAction.data.id,
                    content: editor.getContent(),
                    relayId: this.currentRelay.id,
                    publish: this.currentAction.data.isPublished ? true : publish
                }).then(() => {
                    showToast('Nachricht ' + ((this.currentAction.data.isPublished || publish) ? 'bearbeitet' : 'gespeichert') + '.', () => {
                        for (let element of document.getElementsByClassName('msg-submit'))
                            element.disabled = false
                    })
                }, () => {
                    showToast('Nachricht ' + ((this.currentAction.data.isPublished || publish) ? 'bearbeiten' : 'speichern') + ' fehlgeschlagen.', () => {
                        for (let element of document.getElementsByClassName('msg-submit'))
                            element.disabled = false
                    }, false)
                })

            } else {
                Api.sendMessage({
                    relayId: this.currentRelay.id,
                    publish: publish,
                    content: editor.getContent()
                }).then(() => {
                    showToast('Nachricht ' + ((this.currentAction.data.isPublished || publish) ? 'gesendet' : 'getspeichert') + '.', () => {
                        for (let element of document.getElementsByClassName('msg-submit'))
                            element.disabled = false
                    })
                }, () => {
                    showToast('Nachricht ' + ((this.currentAction.data.isPublished || publish) ? 'senden' : 'speichern') + ' fehlgeschlagen.', () => {
                        for (let element of document.getElementsByClassName('msg-submit'))
                            element.disabled = false
                    }, false)
                })
            }
        }
    },
    computed: {
        currentViewDisplay: function () {
            switch (this.currentView) {
                case 'overview': return 'Überblick'
                case 'sendmessage': return 'Nachricht schreiben'
                case 'relay': return 'Relay-Übersicht'
                case 'relayMsgs': return 'Relay: Nachrichtenarchiev'
            }
        }
    }


})