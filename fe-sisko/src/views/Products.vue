<script setup>
import FlexCenter from "../components/FlexCenter.vue";
import { ref, watch, watchEffect } from "vue";
const products = ref(null);
const getData = async () => {
  await fetch("https://sistemtoko.com/public/demo/product")
    .then((data) => data.json())
    .then((data) => (products.value = data.aaData));
};
getData();
watchEffect(getData);
</script>

<template>
  <flex-center v-if="!products">
    <h1 class="text-5xl">Loading...</h1>
  </flex-center>
  <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4 my-4">
    <div
      v-for="product in products"
      :key="product.id"
      class="border rounded-md overflow-hidden hover:scale-95 transition-all duration-300"
    >
      <div>
        <img :src="product.photo" alt="" />
      </div>
      <div class="p-3">
        <h3 class="capitalize text-xl text-slate-500 font-semibold">{{ product.name }}</h3>
        <h3 class="text-2xl">Rp{{ product.price }}</h3>
      </div>
    </div>
  </div>
</template>
