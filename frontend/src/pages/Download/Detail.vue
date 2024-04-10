<script lang="ts">
import { defineComponent } from 'vue'
import contents from '@/components/Contents.vue'

export default defineComponent({
  name: 'DownloadDetailPage',
  components: { contents },
  data() {
    return {
      characterId: this.$route.params.id,
      characterData: {
        id: 'kong',
        kor_name: '콩쥐',
        eng_name: 'kong',
        description:
          '콩쥐는 정의감 넘치고 당찬 성격의 귀여운 카우보이 쥐 소녀입니다.\n 일본어 VCV를 지원하며, 다색 다음계라는 특징을 가지고 있습니다.\n콩쥐와 함께 노래해주세요!',
        cv: '숯',
        illustrator: '군곰',
        property: {
          height: '158cm',
          weight: '48kg',
          personality: '활기차고 정의로운 성격',
          likes: ['귀여운 것', '골동품', '춤추는것', '두꺼비'],
          hates: ['나쁜 사람들', '동물을 싫어하는 사람들']
        },
        downloads: [
          {
            title: '콩쥐 1.0 다운로드',
            link_text: 'KONG 1.0 DOWNLOAD (Converted)',
            link: 'https://drive.google.com/...'
          },
          {
            title: '콩쥐 2.0 다운로드',
            link_text: 'KONG 2.0 DOWNLOAD (Converted)',
            link: 'https://drive.google.com/...'
          }
        ],
        samples: [
          {
            title: 'きゅうくらりん(Kyu-kurarin)',
            path: 'http://localhost:5173/kong-kurarin.mp3'
          },
          {
            title: 'Honey',
            path: 'http://localhost:5173/kong-honey.mp3'
          }
        ]
      }
    }
  },
  mounted() {
    // 서버에서 캐릭터 데이터 받아오기
    // 실패 하면? -> 404 페이지로 변경
    // this.$router.push('/404')
  },
  computed: {
    description() {
      return this.$data.characterData.description.replace(/\n/gi, '<br />')
    }
  }
})
</script>

<template>
  <contents
    ><template v-slot:banner-left>
      <div class="mx-6 w-full lg:w-2/3 flex flex-col justify-center">
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
    <template v-slot:contents>
      <h2 class="font-bold text-3xl">다운로드</h2>
      <div class="w-full aspect-[1.5/1] mt-6 grid grid-cols-1 sm:grid-cols-[40%_1fr_1fr] lg:grid-cols-[40%_1fr_1fr] gap-2 lg:gap-4">
        <div
          class="w-full h-full bg-[#f19aa3] max-sm:row-start-1 sm:row-span-2 rounded-xl flex bg-right bg-contain bg-no-repeat"
          :class="`bg-[url('@/assets/kong.png')]`"
        >
          <div class="w-1/2 flex flex-col justify-between p-6">
            <h4 class="text-white font-black text-4xl lg:text-6xl mt-2 lg:mt-4">
              {{ characterData.kor_name }}<br />{{ characterData.eng_name.toUpperCase() }}
            </h4>
            <div class="bg-white w-[2px] h-full my-4 lg:my-6" />
            <p class="break-keep text-white font-medium text-sm lg:text-lg lg:leading-6">
              키: {{ characterData.property.height }}<br />
              몸무게: {{ characterData.property.weight }}<br />
              성격: {{ characterData.property.personality }}<br />
              좋아하는 것: {{ characterData.property.likes.join(', ') }}<br />
              싫어하는 것: {{ characterData.property.hates.join(', ') }}<br />
            </p>
          </div>
        </div>
        <div
          class="w-full h-full bg-[#FEBDB7] sm:col-span-2 rounded-xl max-sm:row-start-2 bg-right-bottom bg-contain bg-no-repeat max-lg:row-span-2"
          :class="`bg-[url('@/assets/kong.png')]`"
        >
          <div class="px-6 h-full flex flex-col justify-center flex-1 text-white max-sm:my-6">
            <div class="w-2/3 max-sm:mb-10">
              <h2 class="font-bold text-2xl sm:text-3xl">{{ characterData.kor_name }} / {{ characterData.eng_name.toUpperCase() }}는?</h2>
              <p class="mt-2 sm:mt-6 max-lg:text-sm break-keep font-medium leading-8 tracking-wider" v-html="description"></p>
              <p class="mt-2 sm:mt-6 max-lg:text-sm break-keep font-medium leading-8 tracking-wider">
                CV. {{ characterData.cv }} / 공식 일러스트 {{ characterData.illustrator }}
              </p>
            </div>
          </div>
        </div>
        <div class="w-full h-full bg-[#554747] rounded-xl max-sm:row-start-4 max-lg:row-start-3">
          <div class="p-6 flex flex-col items-center text-white justify-center">
            <h2 class="font-bold text-2xl">다운로드</h2>
            <div class="mt-8 text-center">
              <div class="mb-8" v-for="downloadLink in characterData.downloads" :key="downloadLink.link">
                <a class="mb-4 no-underline text-white font-medium" :href="downloadLink.link">{{ downloadLink.title }}</a
                ><br />
                <a class="no-underline text-white font-medium" :href="downloadLink.link">{{ downloadLink.link_text }}</a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="w-full h-full bg-[#C1BF82] rounded-xl max-sm:row-start-5 max-lg:row-start-3 max-sm:col-span-1 max-lg:col-span-2 col-span-1"
        >
          <div class="w-full h-full box-border p-6 text-white flex flex-col items-center">
            <h2 class="font-bold text-2xl mb-4">목소리 샘플</h2>
            <div class="w-full text-center" v-for="sample in characterData.samples" :key="sample.title">
              <h4 class="mb-4 font-bold text-xl max-sm:text-lg">{{ sample.title }}</h4>
              <audio class="" controls>
                <source :src="sample.path" type="audio/mpeg" />
                <p>오디오가 현재 브라우저에서 지원되지 않습니다.</p>
              </audio>
            </div>
          </div>
        </div>
      </div>
    </template>
  </contents>
</template>
