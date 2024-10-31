<script setup>
import { ref, watch } from "vue";
import Popup from '../common/Popup.vue';

const showModal = ref(false) ; 

const popupOptions = ref({
  title: 'ㅇㅇ프로젝트',
  show: false , 
  content: 'Modal Content',
  confirmText: 'Confirm',
  cancelText: 'Cancel',
  confirmHandler: () => {
    console.log('confirm');
  },
  cancelHandler: () => {
    console.log('cancel');
  }
}) ;

</script>

<template>
  <section id="project" class="flex flex-col gap-8">
    <button @click="popupOptions.show = true" data-modal-target="default-modal" data-modal-toggle="default-modal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
      Toggle modal
    </button>
    <dl class="flex flex-col">
      <dt class="text-lg font-bold tracking-tighter primary-color mb-2">2024년~현재</dt>
      <dd class="flex gap-x-5 flex-wrap gap-y-1">
        <a href="#;" class="text-base font-light">웹접근성 개선 프로젝트(회사이름)</a>
        <span class="text-base font-light">메인 리뉴얼 프로젝트(회사이름)</span>
        <span class="text-base font-light">ㅇㅇㅇㅇ프로젝트(회사이름)</span>
        <span class="text-base font-light">ㅇ프로젝트(회사이름)</span>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
        <span class="text-base font-light">ㅇㅇㅇㅇ프로젝트(회사이름)</span>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
      </dd>
    </dl>
    <dl class="flex flex-col">
      <dt class="text-lg font-bold tracking-tighter primary-color mb-2">2023년</dt>
      <dd class="flex gap-x-5 flex-wrap gap-y-1">
        <a href="#;" class="text-base font-light">ㅇㅇㅇㅇㅇ프로젝트(회사이름)</a>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
      </dd>
    </dl>
    <dl class="flex flex-col">
      <dt class="text-lg font-bold tracking-tighter primary-color mb-2">2022년</dt>
      <dd class="flex gap-x-5 flex-wrap gap-y-1">
        <a href="#;" class="text-base font-light">ㅇㅇㅇㅇㅇ프로젝트(회사이름)</a>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
      </dd>
    </dl>
    <dl class="flex flex-col">
      <dt class="text-lg font-bold tracking-tighter primary-color mb-2">2021년</dt>
      <dd class="flex gap-x-5 flex-wrap gap-y-1">
        <a href="#;" class="text-base font-light">ㅇㅇㅇㅇㅇ프로젝트(회사이름)</a>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
      </dd>
    </dl>
    <dl class="flex flex-col">
      <dt class="text-lg font-bold tracking-tighter primary-color mb-2">2020년</dt>
      <dd class="flex gap-x-5 flex-wrap gap-y-1">
        <a href="#;" class="text-base font-light">UI 리뉴얼 프로젝트(회사이름)</a>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
      </dd>
    </dl>
    <dl class="flex flex-col">
      <dt class="text-lg font-bold tracking-tighter primary-color mb-2">2019년</dt>
      <dd class="flex gap-x-5 flex-wrap gap-y-1">
        <a href="#;" class="text-base font-light">ㅇㅇㅇㅇㅇ프로젝트(회사이름)</a>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
      </dd>
    </dl>
    <dl class="flex flex-col">
      <dt class="text-lg font-bold tracking-tighter primary-color mb-2">2018년</dt>
      <dd class="flex gap-x-5 flex-wrap gap-y-1">
        <a href="#;" class="text-base font-light">ㅇㅇㅇㅇㅇ프로젝트(회사이름)</a>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
      </dd>
    </dl>
    <dl class="flex flex-col">
      <dt class="text-lg font-bold tracking-tighter primary-color mb-2">2017년</dt>
      <dd class="flex gap-x-5 flex-wrap gap-y-1">
        <a href="#;" class="text-base font-light">ㅇㅇㅇㅇㅇ프로젝트(회사이름)</a>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
      </dd>
    </dl>
    <dl class="flex flex-col">
      <dt class="text-lg font-bold tracking-tighter primary-color mb-2">2016년</dt>
      <dd class="flex gap-x-5 flex-wrap gap-y-1">
        <a href="#;" class="text-base font-light">ㅇㅇㅇㅇㅇ프로젝트(회사이름)</a>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
      </dd>
    </dl>
    <dl class="flex flex-col">
      <dt class="text-lg font-bold tracking-tighter primary-color mb-2">2015년</dt>
      <dd class="flex gap-x-5 flex-wrap gap-y-1">
        <a href="#;" class="text-base font-light">ㅇㅇㅇㅇㅇ프로젝트(회사이름)</a>
        <span class="text-base font-light">ㅇㅇ프로젝트(회사이름)</span>
      </dd>
    </dl>
  </section>

  <Popup v-if="popupOptions.show" :options="popupOptions" />

</template>