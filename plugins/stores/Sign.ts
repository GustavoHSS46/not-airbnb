export const useSignModal = defineStore('modal', {
    state: () => ({ isOpen: false, registered: false, modalPop: false}),
    actions: {
        open() {
            this.isOpen = !this.isOpen
            this.registered = false

            this.modalPop = false

        },
        register() {
            this.isOpen = false
            this.registered = !this.registered 

            this.modalPop = false

        },
        Closed() {
            this.isOpen = false
            this.registered = false

        },
        ModalClosed() {
            this.modalPop = false
        },
        Modal() {
            this.isOpen = false
            this.registered = false

            this.modalPop = true
        }
    },
})