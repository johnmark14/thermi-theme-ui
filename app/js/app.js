const App = {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        }
    },
}

Vue.createApp(App).mount('#app');