<script setup>
import { onMounted, ref, watch } from "vue";
// import Header from './components/Header.vue';
// import Container from './components/Container.vue';
// import Footer from './components/Footer.vue';
// import Story from './components/Story.vue';
const appTitle = ref('지금 뭐하지?') ; 
const titleWhere = ref('지금 어디에요?') ; 
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
    { id : 'gy' , label : '경기',
      child : [
        { id : '', label : '수원시' } ,
        { id : '', label : '용인시' } ,
        { id : '', label : '고양시' } ,
        { id : '', label : '화성시' } ,
        { id : '', label : '성남시' } ,
        { id : '', label : '부천시' } ,
        { id : '', label : '남양주시' } ,
        { id : '', label : '안산시' } ,
        { id : '', label : '평택시' } ,
        { id : '', label : '안양시' } ,
        { id : '', label : '시흥시' } ,
        { id : '', label : '파주시' } ,
        { id : '', label : '김포시' } ,
        { id : '', label : '의정부시' } ,
        { id : '', label : '광주시' } ,
        { id : '', label : '하남시' } ,
        { id : '', label : '광명시' } ,
        { id : '', label : '군포시' } ,
        { id : '', label : '양주시' } ,
        { id : '', label : '오산시' } ,
        { id : '', label : '이천시' } ,
        { id : '', label : '안성시' } ,
        { id : '', label : '구리시' } ,
        { id : '', label : '의왕시' } ,
        { id : '', label : '포천시' } ,
        { id : '', label : '양평군' } ,
        { id : '', label : '여주시' } ,
        { id : '', label : '동두천시' } ,
        { id : '', label : '과천시' } ,
        { id : '', label : '가평군' } ,
        { id : '', label : '연천군' } ,
      ]
    } , 
    { id : 'in' , label : '인천',
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
    { id : 'bu' , label : '부산',
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
    { id : 'dj' , label : '대전',
      child : [
        { id : 'dj1', label : '대덕구' } ,
        { id : 'dj2', label : '동구' } ,
        { id : 'dj3', label : '서구' } ,
        { id : 'dj4', label : '유성구' } ,
        { id : 'dj5', label : '중구' } ,
      ]
    } , 
    { id : 'dg' , label : '대구',
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
    { id : 'us' , label : '울산',
      child : [
        { id : 'us1', label : '남구' } ,
        { id : 'us2', label : '동구' } ,
        { id : 'us3', label : '북구' } ,
        { id : 'us4', label : '울주군' } ,
        { id : 'us5', label : '중구' } ,
      ]
    } , 
    { id : 'sj' , label : '세종',
      child : [
        { id : 'sj1', label : '세종' } ,
      ]
    } , 
    { id : 'gj' , label : '광주',
      child : [
        { id : 'gj1', label : '광산구' },
        { id : 'gj2', label : '남구' },
        { id : 'gj3', label : '동구' },
        { id : 'gj4', label : '북구' },
        { id : 'gj5', label : '서구' },
      ]
    } , 
    { id : 'gw' , label : '강원',
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
    { id : 'cb' , label : '충북',
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
    { id : 'cn' , label : '충남',
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
    { id : 'gb' , label : '경북',
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
    { id : 'gn' , label : '경남',
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
    { id : 'jb' , label : '전북',
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
    { id : 'jn' , label : '전남',
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
    { id : 'jj' , label : '제주',
      child : [
        { id : 'jj1', label : '서귀포시' } ,
        { id : 'jj2', label : '제주시' } ,
      ]
    } , 
  ]
}) ;

const sampleDatas = [
  {
    city : '서울' , 
    child : [
      {
        city : '강남구' , 
        plays : ['월드컵공원 산책하기' , '하늘공원 산책하기', '한국 영화박물관 가기', '홍대클럽가기', '공덕동 족발골목가서 족발먹기', '상수동 카페거리 가기']
      } , 
      {
        city : '강동구' , 
        plays : ['강동구에서 놀기1', '강동구에서 놀기2', '강동구에서 놀기3']
      } , 
      {
        city : '강북구' , 
        plays : ['강북구에서 놀기1', '강북구에서 놀기2', '강북구에서 놀기3']
      } , 
      {
        city : '강서구' , 
        plays : ['강서구에서 놀기1', '강서구에서 놀기2', '강서구에서 놀기3']
      } , 
      {
        city : '관악구' , 
        plays : ['관악구에서 놀기1', '관악구에서 놀기2', '관악구에서 놀기3']
      } , 
      {
        city : '광진구' , 
        plays : ['광진구에서 놀기1', '광진구에서 놀기2', '광진구에서 놀기3']
      } , 
      {
        city : '구로구' , 
        plays : ['구로구에서 놀기1', '구로구에서 놀기2', '구로구에서 놀기3']
      } , 
      {
        city : '금천구' , 
        plays : ['금천구에서 놀기1', '금천구에서 놀기2', '금천구에서 놀기3']
      } , 
      {
        city : '노원구' , 
        plays : ['노원구에서 놀기1', '노원구에서 놀기2', '노원구에서 놀기3']
      } , 
      {
        city : '도봉구' , 
        plays : ['도봉구에서 놀기1', '도봉구에서 놀기2', '도봉구에서 놀기3']
      } , 
      {
        city : '동대문구' , 
        plays : ['동대문구에서 놀기1', '동대문구에서 놀기2', '동대문구에서 놀기3']
      } , 
      {
        city : '동작구' , 
        plays : ['동작구에서 놀기1', '동작구에서 놀기2', '동작구에서 놀기3']
      } , 
      {
        city : '마포구' , 
        plays : ['마포구에서 놀기1', '마포구에서 놀기2', '마포구에서 놀기3']
      } , 
      {
        city : '서대문구' , 
        plays : ['서대문구에서 놀기1', '서대문구에서 놀기2', '서대문구에서 놀기3']
      } , 
      {
        city : '서초구' , 
        plays : ['서초구에서 놀기1', '서초구에서 놀기2', '서초구에서 놀기3']
      } , 
      {
        city : '성동구' , 
        plays : ['성동구에서 놀기1', '성동구에서 놀기2', '성동구에서 놀기3']
      } , 
      {
        city : '성북구' , 
        plays : ['성북구에서 놀기1', '성북구에서 놀기2', '성북구에서 놀기3']
      } , 
      {
        city : '송파구' , 
        plays : ['송파구에서 놀기1', '송파구에서 놀기2', '송파구에서 놀기3']
      } , 
      {
        city : '양천구' , 
        plays : ['양천구에서 놀기1', '양천구에서 놀기2', '양천구에서 놀기3']
      } , 
      {
        city : '영등포구' , 
        plays : ['영등포구에서 놀기1', '영등포구에서 놀기2', '영등포구에서 놀기3']
      } , 
      {
        city : '용산구' , 
        plays : ['용산구에서 놀기1', '용산구에서 놀기2', '용산구에서 놀기3']
      } , 
      {
        city : '은평구' , 
        plays : ['은평구에서 놀기1', '은평구에서 놀기2', '은평구에서 놀기3']
      } , 
      {
        city : '종로구' , 
        plays : ['종로구에서 놀기1', '종로구에서 놀기2', '종로구에서 놀기3']
      } , 
      {
        city : '중구' , 
        plays : ['중구에서 놀기1', '중구에서 놀기2', '중구에서 놀기3']
      } , 
      {
        city : '중랑구' , 
        plays : ['중랑구에서 놀기1', '중랑구에서 놀기2', '중랑구에서 놀기3']
      } , 
    ]
  } ,
  {
    city : '경기' , 
    child : [
      {
        city : '수원시' , 
        plays : ['수원시에서 놀기1', '수원시에서 놀기2', '수원시에서 놀기3']
      } , 
      {
        city : '고양시' , 
        plays : ['고양시에서 놀기1', '고양시에서 놀기2', '고양시에서 놀기3']
      } , 
      {
        city : '화성시' , 
        plays : ['화성시에서 놀기1', '화성시에서 놀기2', '화성시에서 놀기3']
      } , 
    ]
  } ,
  // '월드컵공원 산책하기' , '하늘공원 산책하기', '한국 영화박물관 가기', '홍대클럽가기', '공덕동 족발골목가서 족발먹기', '상수동 카페거리 가기'
] ; 

const selectDatas = ref('') ; 
const buttonText = ref('추천해줘!') ;
const buttonClicked = ref( false ) ; 

const  loChild = ref({
  selected : '' , 
  options : []
}) ;

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomData = () => {
  console.log( 'getRandomData in' ) ;

  return new Promise((resolve) => {

    setTimeout(() => { // 로딩바를 보여주기 위해 강제로 로딩 시간 2초 넣어둠

      let 
        bigCity = location.value.selected
      , smallCity = loChild.value.selected
      , count = null
      , result = null
      ; 

      // console.log('bigCity :', bigCity ) ;
      // console.log('smallCity :', smallCity ) ;
    
      const bigCityObj = sampleDatas.find(data => data.city === bigCity);

      // console.log({ bigCityObj }) ;

      
      if (!bigCityObj) return null;
    
      const smallCityObj = bigCityObj.child.find(data => data.city === smallCity);

      // console.log({ smallCityObj }) ;
    
      if (!smallCityObj) return null;

      count = getRandomNumber(0, smallCityObj.plays.length - 1) ; 
      result = smallCityObj.plays[ count ] ;

      // console.log('count : ', count ) ; 
      // console.log('smallCityObj.plays : ', smallCityObj.plays ) ; 
      // console.log('result : ', result ) ; 
    
      resolve( result );

    },2000) ; 
  }) ;

  

};

const buttonClick = async () => {
  if( buttonClicked.value ) return ;
  selectDatas.value = '' ;
  buttonClicked.value = true ; 
  buttonText.value = '잠시만 기다려주세요...' ;

  selectDatas.value = await getRandomData() ;
  buttonClicked.value = false;
  buttonText.value = '추천해줘!';

  
}

watch(() => location.value.selected, (value) => {
  let crntChild = location.value.options.filter( (t) => t.label === value )[0] ;
  loChild.value.options = crntChild.child ;
  loChild.value.selected = crntChild.child[0].label ;
});

onMounted(() => {
  loChild.value.options = location.value.options[0].child ;
  loChild.value.selected = location.value.options[0].child[0].label ;
});

</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 w-full h-full flex-1">
    <h1 class="text-lg mb-4 tracking-tighter absolute top-2.5 left-2.5">{{ appTitle }}</h1>
    <h2 class="text-3xl mb-4 tracking-tighter">{{ titleWhere }}</h2>

    <div class="flex flex-col gap-2">

      <div class="flex items-center justify-center">
        <select name="" id="" class="text-white-800 cursor-pointer bg-slate-950 w-28 p-1" v-model="location.selected">
          <template v-for="(t,i) in location.options" :key="i">
            <option class="text-white-800">{{ t.label }}</option>
          </template>
        </select>
      </div>

      <div class="flex items-center justify-center">
        <select name="" id="" class="text-white-800 cursor-pointer bg-slate-950 w-28 p-1" v-model="loChild.selected">
          <template v-for="(t,i) in loChild.options" :key="i">
            <option class="text-white-800">{{ t.label }}</option>
          </template>
        </select>
      </div>

      <div class="flex items-center justify-center mt-6">
        <!-- <button type="button" class="inline-flex border-gray-600 border-2 p-2 px-4" @click="handleButtonClick">골라줘!!!</button> -->

        <button 
          class="relative border-gray-600 border-2 bg-gray-900 text-white text-center outline-none uppercase tracking-tighter py-3 px-4 leading-4 transition-all duration-500 ease-in-out rounded-full cursor-pointer text-xl"
              v-bind:class="{ 'pr-8 pl-4': buttonClicked }"
          v-on:click="buttonClick()"
        >
          {{ buttonText }}
          <span 
            class="loader animation-spin h-3 w-3 bg-transparent absolute opacity-0 box-border transition-all duration-500 ease-in-out mx-auto rounded-full"
            v-bind:class="{ 'opacity-100': buttonClicked }"
          >
          </span>
        </button>
        
      </div>

      <div class="flex items-center justify-center mt-6">
        <strong class="inline-flex text-2xl font-normal tracking-tight text-white h-20 items-center justify-center px-10">{{ selectDatas }}</strong>
      </div>

      <!-- <div class="absolute left-0 top-0 grid w-full h-full place-items-center rounded-lg p-6 lg:overflow-visible">
        <svg class="text-gray-300 animate-spin" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
          width="24" height="24">
          <path
            d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
          <path
            d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
            stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" class="text-gray-900">
          </path>
        </svg>
      </div> -->

      <!-- 
      제목 : 지금 뭐하지?

      심심해서 뭘 하고싶긴한데 뭐하고 싶을 지 모를 떄 제안해주는 어플!
      지역은 선택 한 후 지역별로 지금 할 수있는 것들으 제안해줍니다.
      -->

      <!-- <div class="flex">
        <div class="mr-4">위치한 구</div>
        
        <template v-for="(t,i) in guType.options" :key="i">
          <input type="checkbox" :id="t.id" v-model="guType.selected" :value="t.label">
          <label :for="t.id" class="pl-1 mr-2 cursor-pointer">{{ t.label }}</label>  
        </template>
        
      </div> -->

    </div>

    <!-- http://apis.data.go.kr/4050000/nrsry/getNrsry?serviceKey=Iv9bo2bVtE6yp%2B6loXz7%2BxB98yRHxWjEVR1qbg1cmgipYxxbtvSeCRKiKwu1JQf8ojuaX2VVDHO9KdX%2Fn9wn7A%3D%3D
&numOfRows=10&pageNo=1&inst_nm=꿈 -->
  </div>
</template>

<style lang="scss" scoped>
.loader {
  // Off-Piste Un-Tailwind-esque Bodges
  right: 0.875rem;
  top: 50%;
  // Loader Construction Using Borders     
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  border-right: 2px solid rgba(#fff, 0.35);
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
</style>