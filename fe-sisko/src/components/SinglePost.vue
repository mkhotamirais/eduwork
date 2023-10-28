<script setup>
import { computed } from "vue";
const props = defineProps({
  post: Object,
});
const snippet = computed(() => {
  return props.post.body.substring(0, 100) + "....";
});
</script>

<template>
  <div class="post">
    <h1 class="font-semibold">{{ post.title }}</h1>
    <!-- <p>{{ post.body.substring(0, 100) + "...." }}</p> -->
    <p>{{ snippet }}</p>
  </div>
</template>
