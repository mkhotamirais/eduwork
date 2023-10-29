<template>
  <header class="border-b-2 h-16 flex justify-between items-center px-3 md:px-16 sticky top-0 bg-white">
    <div>
      <router-link to="/" class="font-semibold text-xl">
        <span v-if="changeLogo">FE-SISKO</span>
        <span v-else>
          <i class="fas fa-home"></i>
        </span>
      </router-link>
    </div>
    <div class="border h-9 sm:h-10 flex items-center rounded-lg overflow-hidden w-[60%] sm:w-1/2">
      <HomeSearch />
    </div>
    <div class="flex">
      <router-link to="/cart" class="nav-link relative">
        <i class="fas fa-cart-shopping"></i>
        <span
          class="absolute bg-red-500 text-white text-xs w-[0.85rem] h-[0.85rem] rounded-full flex items-center justify-center right-0 sm:right-2 top-3"
          >0</span
        >
      </router-link>
      <router-link to="/user" class="nav-link">
        <i class="fas fa-user"></i>
      </router-link>
    </div>
  </header>
  <main class="px-3 md:px-16 min-h-[calc(100vh-4rem)]">
    <router-view></router-view>
  </main>
  <footer class="h-16 border-t-2 text-center">
    <h1>Footer</h1>
  </footer>
</template>

<script setup>
import { ref } from "vue";
import HomeSearch from "./HomeSearch.vue";
const changeLogo = ref(true);
function handleChangeLogo() {
  if (window.innerWidth <= 640) {
    changeLogo.value = false;
  } else {
    changeLogo.value = true;
  }
}
handleChangeLogo();
window.addEventListener("resize", function () {
  handleChangeLogo();
});
</script>

<style>
.nav-link {
  @apply h-16 flex items-center px-2 sm:px-4 capitalize hover:text-slate-500 font-semibold text-xl;
}
</style>
