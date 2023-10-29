<template>
  <table class="w-full mt-5">
    <thead>
      <tr class="text-left">
        <th>#</th>
        <th>Image</th>
        <th>Name</th>
        <th>Qty</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(c, index) in cart">
        <td class="py-5">{{ (index += 1) }}</td>
        <td><img :src="c.name" :alt="c.name" /></td>
        <td>{{ c.name }}</td>
        <td class="flex">
          <Btn class="w-6 h-6" @click="decQty(c)">-</Btn>
          <span class="px-2">{{ c.qty }}</span>
          <Btn class="w-6 h-6" @click="c.qty++">+</Btn>
        </td>
      </tr>
    </tbody>
  </table>
  <Btn class="block ml-auto my-5 py-3 px-5">Checkout</Btn>
</template>

<script setup>
import { ref } from "vue";
import Btn from "../../components/Btn.vue";
const cart = ref([
  { name: "Bag", qty: 3 },
  { name: "Hat", qty: 2 },
  { name: "Dress", qty: 1 },
  { name: "Shoes", qty: 4 },
  { name: "Gloves", qty: 2 },
]);
function decQty(c) {
  if (c.qty <= 0) {
    c.qyt = 0;
  } else {
    c.qty--;
  }
}
</script>
