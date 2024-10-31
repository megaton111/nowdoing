<script setup>
import { ref, watch } from "vue";
import Aside from './Aside.vue';
import Contents from './Contents.vue';
</script>

<template>
  <div class="flex gap-10">
    <Contents />
    <Aside />
  </div>
</template>