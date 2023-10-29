<template>
  <input
    type="text"
    v-model="cari"
    @keyup="handleCariKey"
    placeholder="search here"
    class="h-full w-full focus:outline-none p-2 pl-3 text-slate-500"
  />
  <button @click="handleCariClick" class="w-10 h-full bg-blue-500 text-white">
    <i class="fas fa-search"></i>
  </button>
</template>

<script setup>
import { ref } from "vue";
const cari = ref("");
function handleCariKey(e) {
  if (e.key == "Enter") {
    cari.value = "";
  }
}
function handleCariClick() {
  cari.value = "";
}
</script>
