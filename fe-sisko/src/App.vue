<template>
  <Layer v-if="!bars" @click="openBars" />
  <header>
    <div class="uppercase text-xl font-semibold">
      <router-link to="/" @click="openBars">
        <span v-if="!layarKecil">fe-sisko</span>
        <span v-else>
          <i class="fas fa-home"></i>
        </span>
      </router-link>
    </div>
    <div class="h-10 w-[70%] sm:w-1/2 flex items-center border relative rounded-md overflow-hidden">
      <input type="text" class="h-full w-full focus:outline-none pr-12 p-2" />
      <button class="h-full w-10 bg-blue-500 text-white absolute right-0">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
    <nav ref="nav" class="text-xl" :class="{ 'max-h-0 sm:max-h-full': bars, 'max-h-screen sm:max-h-full': !bars }">
      <router-link to="/cart" @click="openBars">
        <i class="fa-solid fa-cart-shopping"></i>
      </router-link>
      <router-link to="/user" @click="openBars">
        <i class="fa-solid fa-user"></i>
      </router-link>
    </nav>
    <div id="bars" @click="openBars">
      <div id="barsLayer"></div>
      <i v-if="bars" class="fas fa-bars"></i>
      <i v-else class="fas fa-times"></i>
    </div>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <h1>footer</h1>
  </footer>
</template>

<script setup>
import Layer from "./components/Layer.vue";
import { ref } from "vue";
const bars = ref(true);
const nav = ref(null);
const layarKecil = ref(false);

function openBars() {
  bars.value = !bars.value;
}

window.addEventListener("scroll", function () {
  bars.value = true;
});

function ubahLogo() {
  if (window.innerWidth <= 640) {
    layarKecil.value = true;
  } else {
    layarKecil.value = false;
  }
}

window.addEventListener("resize", function () {
  ubahLogo();
});
ubahLogo();
</script>
