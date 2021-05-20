app = new Vue({
    el: '#app',
    data: {
        name: 'MessageRelay',
        support: 'https://google.de',
        currentView: 'relayMsgs',
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
        currentRelay:  {
            id: 'ihdiashdiasd-asdsdfsdfsdf-sdhiasd',
            name: 'Testrelay2',
            messages: [
                {
                    id: "ijdiasdasd",
                    author: 'Deee',
                    content: 'Hi, <b>Hallo</b>',
                    time: '12. 12.'
                },
                {
                    id: "ijdiasdasd",
                    author: 'Deee',
                    content: 'Hi, <b>Hallo</b>',
                    time: '12. 12.'
                },
                {
                    id: "ijdiasdasd",
                    author: 'Deee',
                    content: 'Hi, <b>Hallo</b>',
                    time: '12. 12.'
                }
            ]
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
            router.navigate('/app/overview')
        },
        goToRelayOverview: function (id) {
            router.navigate('/app/relay/' + id)
        }
    },
    computed: {
        currentViewDisplay: function () {
            switch (this.currentView) {
                case 'overview': return 'Überblick'
                case 'sendmessage': return 'Neue Nachricht'
                case 'relay': return 'Relay-Übersicht'
                case 'relayMsgs': return 'Relay: Nachrichtenarchiev'
            }
        }
    }


})