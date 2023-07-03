<template>
    <div class="bg-white sm:w-3/4  max-w-5xl max-h-96 w-full h-2/3  rounded-xl overflow-hidden flex flex-col items-center">
        <div class="w-full h-1/6 flex relative justify-center items-center">
            <h1 class="text-black text-2xl">Register</h1>
            <Icon @click="SignModal.Closed()" name="material-symbols:close"
                class="text-rose-500 text-3xl hover:cursor-pointer absolute right-5" />
        </div>
        <div class="h-4/6 w-full flex flex-col items-center justify-center gap-4 text-black">
            <form @submit.prevent="Register()" class="h-full w-full flex flex-col items-center justify-center gap-4 text-black">
                <input type="text" v-model="name" placeholder="Name" class="w-3/4 h-1/4 px-2.5 py-1.5 hover:cursor-pointer rounded-md shadow-sm bg-white placeholder-gray-600 outline-1 ring-1 ring-slate-400 outline-slate-400">
                <input type="email" v-model="email" placeholder="Email" class="w-3/4 h-1/4 px-2.5 py-1.5 hover:cursor-pointer rounded-md shadow-sm bg-white placeholder-gray-600 outline-1 ring-1 ring-slate-400 outline-slate-400">
                <input type="password" v-model="password" placeholder="Password" class="w-3/4 h-1/4 px-2.5 py-1.5 hover:cursor-pointer rounded-md shadow-sm bg-white placeholder-gray-600 outline-1 ring-1 ring-slate-400 outline-slate-400">
                <button class="text-white bg-rose-500 w-3/4 h-1/4 px-2.5 py-1.5 hover:cursor-pointer rounded-md">
                    <h1>Submit</h1>
                </button>
            </form>
        </div>
        <div class="h-1/6 w-3/4 py-2">
            <h3 @click="SignModal.open()" class="w-fit h-fit text-slate-800 hover:cursor-pointer hover:text-slate-500">Already Have A Account? Click Here</h3>
        </div>
    </div>
</template>

<script setup>
import { useSignModal } from "../plugins/stores/Sign"
import { useSigned } from "../plugins/stores/isSigned"

const SignModal = useSignModal()
const Connected = useSigned()
SignModal.open
SignModal.register

const email = ref('')
const password = ref('')
const name = ref('')


function Register() {
    Connected.SignUp(email, password, name)
    SignModal.Closed()
}
</script>

