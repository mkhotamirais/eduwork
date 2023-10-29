<template>
  <h1 class="text-2xl font-semibold leading-loose">Sistem Toko Products</h1>
  <FlexCenter v-if="!products" class="pb-16">
    <h1 class="text-3xl">Loading...</h1>
  </FlexCenter>
  <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
    <div v-for="product in products" class="border rounded-lg overflow-hidden hover:scale-95 transition-all duration-300">
      <router-link :to="`/products/${product.id}`">
        <img :src="product.photo" :alt="product.name" />
        <div class="p-3">
          <h1 class="text-xl capitalize font-semibold text-slate-500">{{ product.name }}</h1>
          <h3 class="text-3xl">Rp{{ product.price }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, watchEffect } from "vue";
import FlexCenter from "../../components/FlexCenter.vue";
const products = ref(null);
async function fetchData() {
  products.value = null;
  let res = await fetch("https://sistemtoko.com/public/demo/product");
  let data = await res.json();
  products.value = data.aaData;
}
fetchData();
watchEffect(fetchData);
</script>
