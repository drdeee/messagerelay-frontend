app = new Vue({
    el: '#app',
    data: {
        auth
    },
    computed: {
        showWelcome: function(){
            return 'display: ' + (this.auth ? 'none' : 'block') + ';'
        }
    }
})