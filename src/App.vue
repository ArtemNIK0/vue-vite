<script setup>
</script>

<template>
  <div class="bg-red-700 font-sans m-0 h-screen">
    <div class="empty-div flex bg-gray-300 p-5 justify-center"></div>
    <div class="container mx-auto flex items-center justify-center bg-red-600 p-5 h-24 text-center">
      <button @click="openModal" class="btr rounded-2xl bg-transparent mb-5 w-24 h-10 leading-10 text-black border-2 border-black font-bold">окно</button>
      <transition name="fade" appear>
        <div v-if="showModal" @click.self="closeModal" class="modal fixed top-0 left-0 w-full h-full bg-blue-400 bg-opacity-70 z-10 overflow-auto box-border">
          <div class="modal-content bg-black rounded-lg mx-auto p-10 w-80 max-w-md relative box-border">
            <span @click="closeModal" class="close rounded-2xl bg-slate-500 absolute top-5 right-5 text-3xl cursor-pointer">×</span>
            <div class="header text-blue-700 text-center text-2xl mb-5 font-bold">Заголовок шапки</div>
            <div class="scrollable-content text-pink-500">
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe voluptatum vel aperiam totam nesciunt in laborum eius pariatur maxime debitis, corrupti quaerat rem, cupiditate ea sit maiores, molestiae repellat. </p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe voluptatum vel aperiam totam nesciunt in laborum eius pariatur maxime debitis, corrupti quaerat rem, cupiditate ea sit maiores, molestiae repellat. </p>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam saepe voluptatum vel aperiam totam nesciunt in laborum eius pariatur maxime debitis, corrupti quaerat rem, cupiditate ea sit maiores, molestiae repellat. </p>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';


export default {
  name: 'App',
  setup() {
    const showModal = ref(false);
    
    const openModal = () => {
      showModal.value = true;
      document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
      showModal.value = false;
      document.body.style.overflow = "auto";
    };

    return {
      showModal,
      openModal,
      closeModal,
    };
  },
};
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
