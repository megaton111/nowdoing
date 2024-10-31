<script setup>
import { ref, watch } from "vue";
import Intro from './contents/Intro.vue';
import Project from './contents/Project.vue';
import Profile from './contents/Profile.vue';
import Site from './contents/Site.vue';

</script>

<template>
  <main class="flex flex-col">
    <Intro />
    <hr>
    <Project />
    <hr>
    <Profile />
    <hr>
    <Site />
  </main>
</template>