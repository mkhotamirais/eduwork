<template>
  <div v-if="product" class="pt-5">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div class="rounded-lg overflow-hidden w-[80%] sm:w-auto mx-auto">
        <img :src="product.basePathImage + '/' + product.product_img" alt="" />
      </div>
      <div class="text-lg sm:text-2xl leading-loose">
        <table class="w-full table-auto">
          <tr>
            <td>Name</td>
            <td>{{ product.product_name }}</td>
          </tr>
          <tr>
            <td>Price</td>
            <td>{{ Number(product.product_price).toLocaleString("id-ID", { style: "currency", currency: "IDR" }) }}</td>
          </tr>
          <tr>
            <td>Stock</td>
            <td>{{ product.product_qty_stock }}</td>
          </tr>
          <tr>
            <td>Weight</td>
            <td>{{ product.product_weight }}gr</td>
          </tr>
          <tr>
            <td>Description</td>
            <td>{{ product.product_description ? product.product_description : "-" }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <FlexCenter v-else class="pb-16">
    <h1 class="text-3xl">Loading...</h1>
  </FlexCenter>
</template>

<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import FlexCenter from "../../components/FlexCenter.vue";
const product = ref(null);
const route = useRoute();
const id = ref(route.params.id);
async function fetchSingleData() {
  product.value = null;
  let res = await fetch(`https://sistemtoko.com/public/demo/product/${id.value}}`);
  product.value = await res.json();
}
fetchSingleData();
watch(id, fetchSingleData);
</script>

<style setup>
table tr {
  @apply border-b;
}

table tr td {
  @apply py-3;
}
table tr td:last-child {
  @apply font-semibold capitalize;
}
</style>
