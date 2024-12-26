<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import plays from "@/play.json";

const playDatas = ref(plays) ; 
const appTitle = ref('지금 뭐하지?!') ; 
const titleWhere = ref('위치를 선택해주세요!') ; 
const resultData = ref([]) ; 
const buttonText = ref('추천해줘!') ;
const buttonClicked = ref( false ) ; 
const blogButtonClicked = ref( false ) ; 
const latestData = ref('') ; 
const CLIENTID = 'SyfOOErOjwuGUGQo_7dk' ; 
const CLIENTSECRET = '_tcZ5f056o' ;
const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
const selectBlogLink = ref(null) ; 
const showBlog = ref(false) ; 

// local 용
const url = window.location.hostname === 'localhost' ? '/proxy/v1/search/blog.json' : '/.netlify/functions/proxy';
// const url = '/.netlify/functions/proxy';
const isChk = ref( false ) ; 
const blogData = ref([]) ; 

// 위치
const location = ref({
  selected : '서울' , 
  options : [
    { id : 'se' , label : '서울', 
      child : [
        { id : 'gn', label : '강남구' } ,
        { id : 'gd', label : '강동구' } ,
        { id : 'gb', label : '강북구' } ,
        { id : 'gs', label : '강서구' } ,
        { id : 'ga', label : '관악구' } ,
        { id : 'gj', label : '광진구' } ,
        { id : 'gr', label : '구로구' } ,
        { id : 'gc', label : '금천구' } ,
        { id : 'nw', label : '노원구' } ,
        { id : 'db', label : '도봉구' } ,
        { id : 'dd', label : '동대문구' } ,
        { id : 'dj', label : '동작구' } ,
        { id : 'mp', label : '마포구' } ,
        { id : 'sm', label : '서대문구' } ,
        { id : 'sc', label : '서초구' } ,
        { id : 'sd', label : '성동구' } ,
        { id : 'sb', label : '성북구' } ,
        { id : 'sp', label : '송파구' } ,
        { id : 'yc', label : '양천구' } ,
        { id : 'yp', label : '영등포구' } ,
        { id : 'ys', label : '용산구' } ,
        { id : 'ep', label : '은평구' } ,
        { id : 'jr', label : '종로구' } ,
        { id : 'jg', label : '중구' } ,
        { id : 'jl', label : '중랑구' } ,
      ]
    } , 
    { id : 'gy' , label : '경기', disabled : false ,
      child : [
        { id : '', label : '수원시', disabled : false } ,
        { id : '', label : '용인시', disabled : false } ,
        { id : '', label : '고양시', disabled : false } ,
        { id : '', label : '화성시', disabled : false } ,
        { id : '', label : '성남시', disabled : false } ,
        { id : '', label : '부천시', disabled : false } ,
        { id : '', label : '남양주시', disabled : false } ,
        { id : '', label : '안산시', disabled : false } ,
        { id : '', label : '평택시', disabled : false } ,
        { id : '', label : '안양시', disabled : false } ,
        { id : '', label : '시흥시', disabled : false } ,
        { id : '', label : '파주시', disabled : false } ,
        { id : '', label : '김포시', disabled : false } ,
        { id : '', label : '의정부시', disabled : false } ,
        { id : '', label : '광주시', disabled : false } ,
        { id : '', label : '하남시', disabled : false } ,
        { id : '', label : '광명시', disabled : false } ,
        { id : '', label : '군포시', disabled : true } ,
        { id : '', label : '양주시', disabled : true } ,
        { id : '', label : '오산시', disabled : true } ,
        { id : '', label : '이천시', disabled : true } ,
        { id : '', label : '안성시', disabled : true } ,
        { id : '', label : '구리시', disabled : true } ,
        { id : '', label : '의왕시', disabled : true } ,
        { id : '', label : '포천시', disabled : true } ,
        { id : '', label : '양평군', disabled : true } ,
        { id : '', label : '여주시', disabled : true } ,
        { id : '', label : '동두천시', disabled : true } ,
        { id : '', label : '과천시', disabled : true } ,
        { id : '', label : '가평군', disabled : true } ,
        { id : '', label : '연천군', disabled : true } ,
      ]
    } , 
    { id : 'in' , label : '인천', disabled : true ,
      child : [
        { id : '', label : '중구' } ,
        { id : '', label : '동구' } ,
        { id : '', label : '미추홀구' } ,
        { id : '', label : '연수구' } ,
        { id : '', label : '남동구' } ,
        { id : '', label : '부평구' } ,
        { id : '', label : '계양구' } ,
        { id : '', label : '서구' } ,
        { id : '', label : '강화군' } ,
        { id : '', label : '옹진군' } ,
      ]
    } , 
    { id : 'bu' , label : '부산', disabled : true ,
      child : [
        { id : 'bu1', label : '강서구' } ,
        { id : 'bu2', label : '금정구' } ,
        { id : 'bu3', label : '기장군' } ,
        { id : 'bu4', label : '남구' } ,
        { id : 'bu5', label : '동구' } ,
        { id : 'bu6', label : '동래구' } ,
        { id : 'bu7', label : '부산진구' } ,
        { id : 'bu8', label : '북구' } ,
        { id : 'bu9', label : '사상구' } ,
        { id : 'bu10', label : '사하구' } ,
        { id : 'bu11', label : '서구' } ,
        { id : 'bu12', label : '수영구' } ,
        { id : 'bu13', label : '연제구' } ,
        { id : 'bu14', label : '영도구' } ,
        { id : 'bu15', label : '중구' } ,
        { id : 'bu16', label : '해운대구' } ,
      ]
    } , 
    { id : 'dj' , label : '대전', disabled : true ,
      child : [
        { id : 'dj1', label : '대덕구' } ,
        { id : 'dj2', label : '동구' } ,
        { id : 'dj3', label : '서구' } ,
        { id : 'dj4', label : '유성구' } ,
        { id : 'dj5', label : '중구' } ,
      ]
    } , 
    { id : 'dg' , label : '대구', disabled : true ,
      child : [
        { id : 'dg1', label : '군위군' } ,
        { id : 'dg2', label : '남구' } ,
        { id : 'dg3', label : '달서구' } ,
        { id : 'dg4', label : '달성군' } ,
        { id : 'dg5', label : '동구' } ,
        { id : 'dg6', label : '북구' } ,
        { id : 'dg7', label : '서구' } ,
        { id : 'dg8', label : '수성구' } ,
        { id : 'dg9', label : '중구' } ,
      ]
    } , 
    { id : 'us' , label : '울산', disabled : true ,
      child : [
        { id : 'us1', label : '남구' } ,
        { id : 'us2', label : '동구' } ,
        { id : 'us3', label : '북구' } ,
        { id : 'us4', label : '울주군' } ,
        { id : 'us5', label : '중구' } ,
      ]
    } , 
    { id : 'sj' , label : '세종', disabled : true ,
      child : [
        { id : 'sj1', label : '세종' } ,
      ]
    } , 
    { id : 'gj' , label : '광주', disabled : true ,
      child : [
        { id : 'gj1', label : '광산구' },
        { id : 'gj2', label : '남구' },
        { id : 'gj3', label : '동구' },
        { id : 'gj4', label : '북구' },
        { id : 'gj5', label : '서구' },
      ]
    } , 
    { id : 'gw' , label : '강원', disabled : true ,
      child : [
        { id : 'gw1', label : '강릉시' } ,
        { id : 'gw2', label : '고성군' } ,
        { id : 'gw3', label : '동해시' } ,
        { id : 'gw4', label : '삼척시' } ,
        { id : 'gw5', label : '속초시' } ,
        { id : 'gw6', label : '양구군' } ,
        { id : 'gw7', label : '양양군' } ,
        { id : 'gw8', label : '영월군' } ,
        { id : 'gw9', label : '원주시' } ,
        { id : 'gw10', label : '인제군' } ,
        { id : 'gw11', label : '정선군' } ,
        { id : 'gw12', label : '철원군' } ,
        { id : 'gw13', label : '춘천시' } ,
        { id : 'gw14', label : '태백시' } ,
        { id : 'gw15', label : '평창군' } ,
        { id : 'gw16', label : '홍천군' } ,
        { id : 'gw17', label : '화천군' } ,
        { id : 'gw18', label : '횡성군' } ,
      ]
    } , 
    { id : 'cb' , label : '충북', disabled : true ,
      child : [
        { id : 'cb1', label : '괴산군' } ,
        { id : 'cb2', label : '단양군' } ,
        { id : 'cb3', label : '보은군' } ,
        { id : 'cb4', label : '영동군' } ,
        { id : 'cb5', label : '옥천군' } ,
        { id : 'cb6', label : '음성군' } ,
        { id : 'cb7', label : '제천시' } ,
        { id : 'cb8', label : '증평군' } ,
        { id : 'cb9', label : '진천군' } ,
        { id : 'cb10', label : '청주시 상당구' } ,
        { id : 'cb11', label : '청주시 서원구' } ,
        { id : 'cb12', label : '청주시 청원구' } ,
        { id : 'cb13', label : '청주시 흥덕구' } ,
        { id : 'cb14', label : '충주시' } ,
      ]
    } , 
    { id : 'cn' , label : '충남', disabled : true ,
      child : [
        { id : 'cn1', label : '계룡시' } ,
        { id : 'cn2', label : '공주시' } ,
        { id : 'cn3', label : '금산군' } ,
        { id : 'cn4', label : '논산시' } ,
        { id : 'cn5', label : '당진시' } ,
        { id : 'cn6', label : '보령시' } ,
        { id : 'cn7', label : '부여군' } ,
        { id : 'cn8', label : '서산시' } ,
        { id : 'cn9', label : '서천군' } ,
        { id : 'cn10', label : '아산시' } ,
        { id : 'cn11', label : '예산군' } ,
        { id : 'cn12', label : '천안시 동남구' } ,
        { id : 'cn13', label : '천안시 서북구' } ,
        { id : 'cn14', label : '청양군' } ,
        { id : 'cn15', label : '태안군' } ,
        { id : 'cn16', label : '홍성군' } ,
      ]
    } , 
    { id : 'gb' , label : '경북', disabled : true ,
      child : [
        { id : 'gb1', label : '경산시' } ,
        { id : 'gb2', label : '경주시' } ,
        { id : 'gb3', label : '고령군' } ,
        { id : 'gb4', label : '구미시' } ,
        { id : 'gb5', label : '김천시' } ,
        { id : 'gb6', label : '문경시' } ,
        { id : 'gb7', label : '봉화군' } ,
        { id : 'gb8', label : '상주시' } ,
        { id : 'gb9', label : '성주군' } ,
        { id : 'gb10', label : '안동시' } ,
        { id : 'gb11', label : '영덕군' } ,
        { id : 'gb12', label : '영양군' } ,
        { id : 'gb13', label : '영주시' } ,
        { id : 'gb14', label : '영천시' } ,
        { id : 'gb15', label : '예천군' } ,
        { id : 'gb16', label : '울릉군' } ,
        { id : 'gb17', label : '울진군' } ,
        { id : 'gb18', label : '의성군' } ,
        { id : 'gb19', label : '청도군' } ,
        { id : 'gb20', label : '청송군' } ,
        { id : 'gb21', label : '칠곡군' } ,
        { id : 'gb22', label : '포항시 남구' } ,
        { id : 'gb23', label : '포항시 북구' } ,
      ]
    } , 
    { id : 'gn' , label : '경남', disabled : true ,
      child : [
        { id : 'gn1' , label : '거제시' } ,
        { id : 'gn2' , label : '거창군' } ,
        { id : 'gn3' , label : '고성군' } ,
        { id : 'gn4' , label : '김해시' } ,
        { id : 'gn5' , label : '남해군' } ,
        { id : 'gn6' , label : '밀양시' } ,
        { id : 'gn7' , label : '사천시' } ,
        { id : 'gn8' , label : '산청군' } ,
        { id : 'gn9' , label : '양산시' } ,
        { id : 'gn10' , label : '의령군' } ,
        { id : 'gn11' , label : '진주시' } ,
        { id : 'gn12' , label : '창녕군' } ,
        { id : 'gn13' , label : '창원시 마산합포구' } ,
        { id : 'gn14' , label : '창원시 마산회원구' } ,
        { id : 'gn15' , label : '창원시 성산구' } ,
        { id : 'gn16' , label : '창원시 의창구' } ,
        { id : 'gn17' , label : '창원시 진해구' } ,
        { id : 'gn18' , label : '통영시' } ,
        { id : 'gn19' , label : '하동군' } ,
        { id : 'gn20' , label : '함안군' } ,
        { id : 'gn21' , label : '함양군' } ,
        { id : 'gn22' , label : '합천군' } ,
      ]
    } , 
    { id : 'jb' , label : '전북', disabled : true ,
      child : [
        { id : 'jb1', label : '고창군' } ,
        { id : 'jb2', label : '군산시' } ,
        { id : 'jb3', label : '김제시' } ,
        { id : 'jb4', label : '남원시' } ,
        { id : 'jb5', label : '무주군' } ,
        { id : 'jb6', label : '부안군' } ,
        { id : 'jb7', label : '순창군' } ,
        { id : 'jb8', label : '완주군' } ,
        { id : 'jb9', label : '익산시' } ,
        { id : 'jb10', label : '임실군' } ,
        { id : 'jb11', label : '장수군' } ,
        { id : 'jb12', label : '전주시 덕진구' } ,
        { id : 'jb13', label : '전주시 완산구' } ,
        { id : 'jb14', label : '정읍시' } ,
        { id : 'jb15', label : '진안군' } ,
      ]
    } , 
    { id : 'jn' , label : '전남', disabled : true ,
      child : [
        { id : 'jn1', label : '강진군' } ,
        { id : 'jn2', label : '고흥군' } ,
        { id : 'jn3', label : '곡성군' } ,
        { id : 'jn4', label : '광양시' } ,
        { id : 'jn5', label : '구례군' } ,
        { id : 'jn6', label : '나주시' } ,
        { id : 'jn7', label : '담양군' } ,
        { id : 'jn8', label : '목포시' } ,
        { id : 'jn9', label : '무안군' } ,
        { id : 'jn10', label : '보성군' } ,
        { id : 'jn11', label : '순천시' } ,
        { id : 'jn12', label : '신안군' } ,
        { id : 'jn13', label : '여수시' } ,
        { id : 'jn14', label : '영광군' } ,
        { id : 'jn15', label : '영암군' } ,
        { id : 'jn16', label : '완도군' } ,
        { id : 'jn17', label : '장성군' } ,
        { id : 'jn18', label : '장흥군' } ,
        { id : 'jn19', label : '진도군' } ,
        { id : 'jn20', label : '함평군' } ,
        { id : 'jn21', label : '해남군' } ,
        { id : 'jn22', label : '화순군' } ,
      ]
    } , 
    { id : 'jj' , label : '제주', disabled : true ,
      child : [
        { id : 'jj1', label : '서귀포시' } ,
        { id : 'jj2', label : '제주시' } ,
      ]
    } , 
  ]
}) ;

// 하위 지역 선택
const locationChild = ref({
  selected : '' , 
  options : []
}) ;

// 랜덤 숫자
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 랜덤 데이터 가져오기
const getRandomData = () => {

  return new Promise((resolve) => {

    setTimeout(() => { // 로딩바를 보여주기 위해 강제로 로딩 시간 2초 넣어둠

      let 
          bigCity = location.value.selected
      ,   smallCity = locationChild.value.selected
      ,   count = null
      ,   result = null
      ; 
    
      const bigCityObj = playDatas.value.find(data => data.city === bigCity);
      
      if (!bigCityObj) {
        resultData.value.unshift( '선택한 대도시가 없습니다.' );
        resetStatus() ; 
        return null;
      };
    
      const smallCityObj = bigCityObj.child.find(data => data.city === smallCity);
    
      if (!smallCityObj) {
        resultData.value.unshift( '선택한 지역에 대한 활동 정보가 없습니다.' );
        resetStatus() ; 
        return null;
      }

      count = getRandomNumber(0, smallCityObj.plays.length - 1) ; 
      result = smallCityObj.plays[ count ] ;
    
      resolve( result );

    }, 300 ) ; 
  }) ;

};

// 블로그 글 리스트 가져오기
const getAddInfoData = async ( resultData ) => {

  try {
      const response = await axios.get(url, {
        params: {
          query: resultData ,
          display: 10, // Number of results to display (1 to 100)
          start: 1, // Starting result position (default is 1)
          sort: 'sim' // Sort by similarity or date ('sim' or 'date')
        },
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          'X-Naver-Client-Id': CLIENTID,
          'X-Naver-Client-Secret': CLIENTSECRET
        }
      });

      blogData.value = response.data.items ;
      blogButtonClicked.value = false ; 
    
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }

}

// 추천하기 버튼 클릭 이벤트
const getPlayDataHandler = async () => {
  if( buttonClicked.value ) return ;
  latestData.value = null ;
  buttonClicked.value = true ; 
  blogData.value = [] ; 
  buttonText.value = '잠시만 기다려주세요...' ;
  latestData.value = await getRandomData() ; 
  resultData.value.unshift( latestData.value ) ;
  isChk.value = true ; // 한번이라도 조회를 했으면 true값으로 변경
  resetStatus() ; 
}

// 관련정보 더보기 버튼 클릭 이벤트
const showBlogPostHandler = () => {
  if( blogData.value.length > 0 ) return ; 
  blogButtonClicked.value = true ; 
  getAddInfoData( latestData.value ) ; 
}

// 버튼 정보 초기화
const resetStatus = () => {
  buttonClicked.value = false;
  buttonText.value = '추천해줘!';
}

const showBlogIfarme = ( link ) => {
  showBlog.value = true ; 
  selectBlogLink.value = link ; 
}

const closeBlogIframe = () => {
  showBlog.value = false ; 
  selectBlogLink.value = '' ; 
}

watch(() => location.value.selected, (value) => {
  let crntChild = location.value.options.filter( (t) => t.label === value )[0] ;
  locationChild.value.options = crntChild.child ;
  locationChild.value.selected = crntChild.child[0].label ;
});

onMounted(() => {
  locationChild.value.options = location.value.options[0].child ;
  locationChild.value.selected = location.value.options[0].child[0].label ;
});

</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 w-full h-full flex-1 wrap">
    <h1 class="text-lg mb-4 absolute top-2 left-0 opacity-40 w-full text-center font-bold" style="letter-spacing:25px;">{{ appTitle }}</h1>
    <h2 class="text-xl mb-4 tracking-tighter">{{ titleWhere }}</h2>

    <div class="flex flex-col gap-2 w-full">

      <div class="flex w-full px-20 gap-2">
        <div class="flex flex-1 items-center justify-center">
          <select 
            class="text-lg text-white-800 cursor-pointer w-full select" 
            v-model="location.selected"
          >
            <template v-for="(t,i) in location.options" :key="i">
              <option class="text-white-800" :disabled="t.disabled">{{ t.label }} {{ t.disabled ? '(준비중)' : ''}}</option>
            </template>
          </select>
        </div>

        <div class="flex flex-1 items-center justify-center">
          <select 
            class="text-lg text-white-800 cursor-pointer w-full select" 
            v-model="locationChild.selected"
          >
            <template v-for="(t,i) in locationChild.options" :key="i">
              <option class="text-white-800" :disabled="t.disabled">{{ t.label }} {{ t.disabled ? '(준비중)' : ''}}</option>
            </template>
          </select>
        </div>
      </div>


      <div class="flex items-center justify-center mt-6">
        <button 
          class="relative border-gray-600 border-2 bg-gray-900 text-white text-center outline-none uppercase tracking-tighter py-3 px-6 leading-4 transition-all duration-500 ease-in-out rounded-full cursor-pointer text-xl"
          :class="{ 'pr-8 pl-4': buttonClicked }"
          @click="getPlayDataHandler"
        >
          {{ buttonText }}
          <span 
            class="loader animation-spin h-3 w-3 bg-transparent absolute opacity-0 box-border transition-all duration-500 ease-in-out mx-auto rounded-full"
            :class="{ 'opacity-100': buttonClicked }"
          >
          </span>
        </button>
        
      </div>

      <div 
        class="flex flex-col items-center justify-center mt-6"
      >
        <strong
          class="inline-flex text-4xl font-normal tracking-tighter text-white items-center justify-center px-10"
        >
          {{ resultData[0] }} 
        </strong> 
        <!-- <button 
          type="button" 
          class="flex text-sm mb-4 mt-2 w-full justify-center"
          @click="showBlogPostHandler"
          v-if="resultData.length > 0"
        >
          관련정보 더보기
          <svg 
            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" 
            className="size-6" 
            class="w-4"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </button> -->

        <!-- 이전 조회 데이터 -->
        <!-- <ul class="flex flex-col bx-prev-data">
          <li
            class="inline-flex font-normal tracking-tighter text-white items-center justify-center px-10 opacity-20 text-base"
            :class="{ 'hidden' : idx == 0 }"
            v-for="(item,idx) in resultData" :key="idx"
          >
            {{ item }}
          </li>
        </ul> -->
        
        <!-- 블로그 관련글 -->
        <!-- <div class="bx-blog-data mt-6 flex w-full justify-center relative">
          <span 
            v-if="blogButtonClicked"
            class="loader blog-loader animation-spin h-3 w-3 bg-transparent opacity-0 box-border transition-all duration-500 ease-in-out mx-auto rounded-full mt-3 absolute"
            :class="{ 'opacity-100': blogButtonClicked }"
          >
          </span>
          <ul class="flex flex-col gap-1 px-4 justify-start w-full items-center">
            <li v-for="(blog,bIdx) in blogData" :key="bIdx">
              <button type="button" v-html="blog.title" @click="showBlogIfarme( blog.link )"></button>
            </li>
          </ul>
        </div> -->

        <!-- <div class="blogWrap" v-if="showBlog">
          <iframe :src="selectBlogLink" frameborder="0" sandbox></iframe>
        </div> -->

        <!-- <div v-if="showBlog" class="overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div class="relative bg-white p-4 rounded-lg w-11/12 h-5/6 max-w-3xl">
            <button @click="closeBlogIframe" class="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
              X
            </button>
            <iframe :src="selectBlogLink" frameborder="0" sandbox="allow-same-origin allow-scripts allow-popups allow-top-navigation-by-user-activation" class="w-full h-full"></iframe>
          </div>
        </div> -->

      </div>

    </div>

    <!-- http://apis.data.go.kr/4050000/nrsry/getNrsry?serviceKey=Iv9bo2bVtE6yp%2B6loXz7%2BxB98yRHxWjEVR1qbg1cmgipYxxbtvSeCRKiKwu1JQf8ojuaX2VVDHO9KdX%2Fn9wn7A%3D%3D
&numOfRows=10&pageNo=1&inst_nm=꿈 -->
  </div>
</template>

<style lang="scss" scoped>
.wrap{
  // transition: all .4s ease-in ;
}

.loader {
  right: 0.875rem;
  top: 50%;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  border-right: 2px solid rgba(#fff, 0.35);
  &.blog-loader {
    right:50% ; 
  }
}

.animation-spin {
  animation-name: spin;
  animation-duration: 0.75s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateY(-50%) rotate(360deg);
  }
}

.blogWrap{
  position: absolute;
  left: 10px ; top: 10px ; right: 10px ; bottom: 10px ;
  background-color: #fff;
  padding:20px ; 
  iframe {
    width: 100% ; height:100% ;
  }
}
</style>