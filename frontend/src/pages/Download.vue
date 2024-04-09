<script lang="ts">
import { defineComponent } from 'vue'
import contents from '@/components/Contents.vue'

export default defineComponent({
  name: 'DownloadPage',
  components: { contents },
  data() {
    return {
      characters: [
        { koreanName: '팥쥐', englishName: 'potg', id: 'potg' },
        { koreanName: '콩쥐', englishName: 'kong', id: 'kong' },
        { koreanName: '소우', englishName: 'saw', id: 'saw' },
        { koreanName: '달토', englishName: 'dalto', id: 'dalto' },
        { koreanName: '나가라자 류', englishName: 'nagaraja ryu', id: 'ryu' },
        { koreanName: '비비암', englishName: 'bbam', id: 'bbam' },
        { koreanName: '유주', englishName: 'yuju', id: 'yuju' },
        { koreanName: '양울', englishName: 'yangwool', id: 'yangwool' },
        { koreanName: '키이', englishName: 'kii', id: 'kii' },
        { koreanName: '킨', englishName: 'kin', id: 'kin' },
        { koreanName: '빈', englishName: 'bin', id: 'bin' },
        { koreanName: '민우', englishName: 'minwoo', id: 'minwoo' }
      ]
    }
  }
})
</script>

<template>
  <contents :is-margin-bottom="false"
    ><template v-slot:banner-left>
      <div class="mx-6 w-full lg:w-2/3 flex flex-col">
        <h2 class="text-white font-bold text-2xl">오늘의 간지</h2>
        <p class="text-subtitle-text break-keep leading-8 mt-2 sm:mt-6">
          빈이는 배려심 넘치고 사랑스러운 강아지 수인입니다. <br />
          한국어 CVVC / 일본어 VCV를 지원하며, 다색 다음계라는 특징을 가지고 있습니다. <br />
          어서 다정한 강아지를 만나보세요.
        </p>
      </div>
    </template>
    <template v-slot:banner-right
      ><div class="relative w-full">
        <img src="https://source.unsplash.com/random/400x200" alt="banner" class="w-full h-full bg-gray-200 object-cover" /></div
    ></template>
  </contents>
  <div class="grid grid-cols-3 sm:grid-cols-4 bg-gray-100">
    <div class="aspect-[1/1.5] bg-blue-300 [&:nth-child(even)]:bg-red-300 relative" v-for="character in characters" :key="character.id">
      <div class="absolute w-full h-full bg-black opacity-60 transition-colors ease-in-out hover:bg-transparent"></div>
      <div class="absolute bottom-0 p-2 text-white font-bold text-xs sm:text-xl lg:text-2xl xl:text-3xl lg:p-5">
        <h3 class="">{{ character.englishName.toUpperCase() }}</h3>
        <h4 class="">{{ character.koreanName }}</h4>
      </div>
    </div>
  </div>
</template>
