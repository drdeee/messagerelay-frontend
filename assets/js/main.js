app = new Vue({
    el: '#app',
    data: {
        name: 'MessageRelay',
        support: 'https://google.de',
        currentView: 'overview',
        auth,
        user: {
            name: 'Elias Bistry',
            image: 'https://cdn.discordapp.com/icons/691691563805573121/96e07b5812cd4c8c3df858adb0a9f236.png',
            permissions: {
                sendMessages: true,
                viewArchieve: true,
                manageUsers: true,
                manageCategories: true
            }
        }
    },
    methods:  {
        login: function(){
            this.auth = true
            this.currentView = 'overview'
            router.navigate('/app/overview')

        },
        logout: function(){
            router.navigate('/logout')
        }
    },


})