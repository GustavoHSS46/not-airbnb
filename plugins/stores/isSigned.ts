import { useSignModal } from "./Sign";
export const useSigned = defineStore('connected', {
    state: () => ({ connected: false, token: ref(useCookie(process.env.SESSION_KEY)), isAuthenticated: false }),
    actions: {
        Connected() {
            if (this.token !== undefined) {
                this.connected = true
            } else {
                this.connected = false
            }
        },
        Logout() {
            const client = useSupabaseClient()
            client.auth.signOut()
            client.auth.onAuthStateChange((event, session) => {
                if (event == 'SIGNED_OUT') {
                    this.connected = false
                    this.token = undefined
                }
            })
        },
        SignUp(email, password, name) {
            const SignModal = useSignModal()
            const client = useSupabaseClient()
            client.auth.signUp({
                email: email.value,
                password: password.value
            })
            SignModal.Modal()
        },
        Login(email, password) {
            const client = useSupabaseClient()
            client.auth.signInWithPassword({
                email: email.value,
                password: password.value
            })
            client.auth.onAuthStateChange((event, session) => {
                if (event == 'SIGNED_IN') {
                    this.connected = true
                    this.token = session
                }
            })

        }
    },
})