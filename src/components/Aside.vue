<script setup>
import { ref, watch } from "vue";

const menus = ref([
  { name : 'Intro', id : 'intro' },
  { name : 'Project', id : 'project' },
  { name : 'Profile', id : 'profile' },
  { name : 'Site', id : 'site' },
])
</script>

<template>
  <aside class="">
    <nav class="flex flex-col gap-4 sticky pt-8 top-28">
      <a v-for="(m,i) in menus" :href="'#'+m.id" :key="i">{{ m.name }}</a> 
    </nav>
  </aside>
</template>