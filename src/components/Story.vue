<script setup>
import { nextTick, onMounted, onUnmounted, ref, watch } from "vue";

const imgs = ref([
  { name : '이미지 1', url : 'https://images.pexels.com/photos/28834354/pexels-photo-28834354/free-photo-of-elegant-whiskey-sour-cocktail-with-dried-citrus.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' } , 
  { name : '이미지 2', url : 'https://images.pexels.com/photos/28834355/pexels-photo-28834355/free-photo-of-elegant-cocktail-with-ice-on-a-golden-tray.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' } , 
  { name : '이미지 3', url : 'https://images.pexels.com/photos/28304794/pexels-photo-28304794/free-photo-of-a-person-holding-a-camera-with-a-strap.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' } , 
  { name : '이미지 4', url : 'https://images.pexels.com/photos/28820458/pexels-photo-28820458/free-photo-of-person-taking-photo-of-flowers-with-smartphone.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' } , 
]) ;

const currentImage = ref(0) ; // 현재보이는 이미지
const imgsLength = ref(imgs.value.length) ; // 총 이미지 갯수
const viewTime = 4000 ; // 이미지 보이는 시간

let bar = null
,   bars = null 
,   intervalId = null
; 


const activeImg = (index) => {
  bars[index].classList.add('active') ;
}

const addActiveClass = ( index = 0 ) => {
  activeImg( currentImage.value ) ;
  // 1초 후 다음 요소에 active 클래스 추가
  setTimeout(() => {
    if (index >= imgsLength.value - 1 ) return;
    currentImage.value = currentImage.value + 1; 
    addActiveClass( currentImage.value ); // 재귀 호출로 다음 요소에 클래스 추가
  }, viewTime);
}




onMounted(()=>{
  
  bar = document.querySelector('.bar') ;
  bars = bar.querySelectorAll('div') ;

  if (bars.length > 0) {
    console.log('start in') ; 
    requestAnimationFrame(() => {
      bars[0].classList.add('active');
    });
  }

  nextTick(() => {
    setTimeout(() => {
      addActiveClass( currentImage.value ) ;
    }, viewTime);
  }) ;
  
})

onUnmounted(() => {
});

</script>

<template>
<!-- https://github.com/tal7aouy/slide-stories?ref=vuejsexamples.com -->
  <div class="storyApp">
    <div class="storyWrap">

      <div class="bar" v-if="imgsLength > 1">
        <!-- <div v-for="(b,i) in imgsLength" :key="i" :data-n="i" :class="{ active : i <= currentImage}">{{ b.name }}</div> -->
        <div v-for="(b,i) in imgsLength" :key="i">{{ b.name }}</div>
      </div> <!-- end of bar -->

      <div class="profile">
        <div class="photo"><img src="https://images.pexels.com/photos/27230366/pexels-photo-27230366/free-photo-of-portrait-of-man-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></div>
        <div class="name">Imod</div>
      </div> <!-- end of profile -->

      <div class="controller">
        <button type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clip-rule="evenodd" />
          </svg>
          <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
            <path fill-rule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
          </svg> -->
        </button>
      </div> <!-- end of controller -->

      <img v-if="imgs[currentImage]" :src="imgs[currentImage].url" alt="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.storyApp{
  position: relative;
  display: flex;
  width: 100%; height:100% ;
  flex : 1 ; 
  align-items: center;
  justify-content: center ;
}
.storyWrap{
  position: relative;
  display: flex;
  align-items: center ;
  justify-content: center ;
  background-color: #000 ;
  width: 400px;
  height:600px ; 
  border-radius: 10px ;
  overflow: hidden;
  img {
    // max-width: 100% ;
    width: auto ;
    height:100% ; 
  }
  .bar{
    display: flex;
    position: absolute;
    left: 0 ; top: 20px ;
    width: 100% ; height: 4px ;
    padding:0 20px ; 
    align-items: center ;
    gap:3px ; 
    > div {
      position: relative;
      flex : 1 ; 
      height:4px ;
      background-color: rgba(245, 245, 245, 0.4); 
      border-radius: 2px ;
      overflow: hidden;
      &::before{
        content: '';
        position: absolute;
        left: 0 ; top: 0 ;
        width: 0% ; height: 100% ;
        background-color: #f5f5f5 ;
        border-radius: 2px ;
        transition: all 4000ms ;
      }
      &.active::before{
        width: 100% ;
      }
    }
  }

  .profile{
    display: flex;
    position: absolute;
    left: 20px; top: 40px ; height:36px ; 
    align-items: center ; gap: 10px ;
    .photo {
      display: flex;
      align-items: center ;
      width: 36px; height:36px ; 
      border-radius: 50% ;
      overflow: hidden;
      img {
        max-width: 100% ;
        height:auto ; 
      }
    }
    .name{
      font-size: 14px ;
      color: #fff ;
      font-weight: 600;
    }
  }
  .controller{
    position: absolute;
    right:20px ; top: 40px ;
    height: 36px ;
    display: flex;
    align-items: center ;
  }
}
</style>