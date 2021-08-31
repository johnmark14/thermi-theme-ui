const App = {
    data() {
        return {
            isOpen: false,
            modalOpen: false,
            scTimer: 0,
            scY: 0,
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
        toggleModal() {
            this.modalOpen = !this.modalOpen
        },
        stopModalVideo() {
            player.stopVideo()
        },
        toTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        },
    },
}

Vue.createApp(App).mount('#app');