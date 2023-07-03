<template>
  <div class="bg-white w-screen h-screen flex justify-center font-sans subpixel-antialiased relative overflow-hidden">
    <NuxtPage class="w-full h-full max-w-7xl mx-auto px-2 sm:px-6 md:px-8" />
  </div>
  <div v-if="SignModal.isOpen || SignModal.registered || SignModal.modalPop"
    class="h-screen w-screen flex justify-center items-center bg-black/50 absolute top-0 left-0"> </div>
  <Transition name="slide-fade">
    <div v-if="SignModal.isOpen" class="h-screen w-screen flex justify-center items-center absolute top-0 left-0">
      <SignPopup />
    </div>
  </Transition>

  <Transition name="slide-fade">
    <div v-if="SignModal.registered" class="h-screen w-screen flex justify-center items-center absolute top-0 left-0">
      <RegisterModal />
    </div>
  </Transition>

  <Transition name="slide-fade">
    <div v-if="SignModal.modalPop" class="h-screen w-screen flex justify-center items-center absolute top-0 left-0">
      <ModalReusable />
    </div>
  </Transition>
</template>

<script setup>
import { useSignModal } from "./plugins/stores/Sign"
const SignModal = useSignModal()


</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active  {
  transition: all 0.7s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-150px);
  opacity: 0;
}
</style>