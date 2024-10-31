<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";

const headerRef = ref(null);

// const handleScroll = () => {
//   let scrollY = getCurrentScroll() ; 
//   console.log('scrollY : ', scrollY ) ; 
//   if (scrollY >= 40) {
//     headerRef.value.classList.add('scrolled');
//   } else {
//     headerRef.value.classList.remove('scrolled');
//   }
// };

// const getCurrentScroll = () => {
//   return window.pageYOffset || document.documentElement.scrollTop;
// }

// onMounted(() => {
//   window.addEventListener('scroll', handleScroll);
// });

// onUnmounted(() => {
//   window.removeEventListener('scroll', handleScroll);
// });

</script>

<template>
  <header class="fixed top-0" ref="headerRef">
    <div>
      <h1 class="flex justify-center items-center mb-6 text-4xl font-mono tracking-tight">
        <span class="mr-2">keep</span><span class="font-thin">going</span>
      </h1>
    </div>
    <!-- <p class="flex justify-center text-lg">UI 퍼블리싱 전문가입니다.</p> -->
  </header>
</template>