<template>
    <div v-if="Connected.token !== undefined" class="h-full w-full relative gap-2 text-black flex justify-center items-center">
        <Icon @click="isVisible = !isVisible" name="material-symbols:account-circle-full"
            class="text-4xl hover:cursor-pointer" />
        <div v-if="isVisible" class="absolute w-48 h-48 bg-white px-1.5 rounded-md flex flex-col items-center shadow-xl z-999 mt-6 -top-1/4 left-1/2 transform -translate-x-1/2 translate-y-1/4">
            <div @click="Connected.Logout()"
                class="w-full h-1/4 flex items-center justify-around  text-gray-700  hover:cursor-pointer hover:text-red-500">
                <h1 class="test-sm capitalize ">Log out</h1>
                <Icon name="ri:logout-box-r-line" />
            </div>
        </div>
    </div>
    <div v-if="Connected.token === undefined" class="h-full w-full flex justify-center items-center">
        <button @click="SignModal.open(), isVisible = false" class="bg-rose-500 h-2/3 w-24 rounded-md">
            <h1>Sign in</h1>
        </button>
    </div>
</template>

<script setup>
import { useSignModal } from "../plugins/stores/Sign"
import { useSigned } from "../plugins/stores/isSigned"
const SignModal = useSignModal()
const Connected = useSigned()
Connected.Connected()
SignModal.open

const isVisible = ref(false)
</script>