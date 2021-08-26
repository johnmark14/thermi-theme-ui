const App = {
    data() {
        return {
            isOpen: false,
            modalOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
        toggleModal() {
            this.modalOpen = !this.modalOpen
        }
    },
}

Vue.createApp(App).mount('#app');