// Footer 

const footer = document.querySelector('#footer')
const smallFooter = document.querySelector('#footer div.small')
const expandedFooter = document.querySelector('#footer div.expanded')

footer.addEventListener('mouseover', () => {
    smallFooter.style.display = 'none'
    expandedFooter.style.display = 'block'
})

footer.addEventListener('mouseout', () => {
    smallFooter.style.display = 'block'
    expandedFooter.style.display = 'none'
})

// APP
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