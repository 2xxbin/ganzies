<script lang="ts">
import { defineComponent } from 'vue'
import contents from '@/components/Contents.vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'EulaPage',
  components: {
    contents,
    Carousel,
    Navigation,
    Pagination,
    Slide
  },
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
      ],
      eulas: [
        { title: '일러스트', contents: ['일러스트에 대한 약관을 작성합니다.'] },
        { title: '보이스뱅크', contents: ['보이스뱅크에 대한 약관을 작성합니다.'] },
        { title: '연성', contents: ['연성에 대한 약관을 작성합니다.'] }
      ],
      characterEulas: [
        { characterName: '양울', eulas: ['R-18표현을 금지합니다.'] },
        { characterName: '나가라자 류', eulas: ['정치적 사용을 금지합니다.'] }
      ]
    }
  }
})
</script>

<template>
  <contents>
    <template v-slot:banner-left
      ><div class="w-full h-full flex justify-center flex-col px-16">
        <h3 class="font-notoSans font-bold text-2xl text-white">이용 규약</h3>
        <p class="mt-6 font-notoSans font-medium text-subtitle-text break-keep">UTAU를 사용할때, 이 점은 주의해 주세요!</p>
      </div></template
    >
    <template v-slot:banner-right
      ><div class="relative w-full h-full">
        <img src="https://source.unsplash.com/random/400x200" alt="banner" class="w-full h-full object-cover" /></div
    ></template>
    <template v-slot:contents>
      <h1 class="font-bold text-4xl mb-8">이용 규약</h1>
      <Carousel>
        <Slide v-for="eula in eulas" :key="eula.title">
          <div class="w-full">
            <h3 class="font-bold text-2xl my-8">{{ eula.title }}</h3>
            <div class="text-eula-text font-medium leading-8 break-keep [&>p]:mb-4">
              <p v-for="content in eula.contents" :key="content">{{ content }}</p>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      <h1 class="font-bold text-4xl mb-8">캐릭터 별 특수 이용 규약</h1>
      <Carousel>
        <Slide v-for="characterEula in characterEulas" :key="characterEula.characterName">
          <div class="w-full">
            <h3 class="font-bold text-2xl my-8">{{ characterEula.characterName }}</h3>
            <div class="text-eula-text font-medium leading-8 break-keep [&>p]:mb-4">
              <p v-for="eula in characterEula.eulas" :key="eula">{{ eula }}</p>
            </div>
          </div>
        </Slide>
        <template #addons>
          <Navigation />
          <Pagination />
        </template>
      </Carousel>
      <h1 class="font-bold text-4xl my-8">기본 규칙</h1>
      <div class="text-eula-text font-medium leading-8 break-keep [&>p]:mb-4">
        <p>
          GANZIES 보이스 총 관리자는 Duckchild(@tlrpclock)입니다.<br />
          각자 캐릭터의 관한 질문은 각 캐릭터의 CV / 혹은 관리자에게 연락해주세요. <br />
          이 UTAU의 제작자는 다른 사람이 자신의 음성 라이브러리 또는 이미지로 만든 작업에 대해 책임을 지지 않으며, 따라서 해당 작업과 관련된
          손해에 대해 책임을 지지 않습니다.
        </p>
        <p>
          CV의 명예를 훼손할 수 있는 모든 행위와 UTAU를 이용해 타인의 명예를 훼손하는 모든 행위를 금지합니다. <br />
          CV의 목소리나 저작물을 표절하거나, 사칭하지 마세요.
        </p>
        <p>
          GANZIES의 음원은 대부분 재배포할 수 없으나, 가능한 음원들이 있으니 확인해주시길 바랍니다. <br />
          허가 없이 캐릭터 / 목소리를 이용한 상업적 이용은 금지되어 있습니다.<br />
          종교적 / 정치적인 목적으로 캐릭터나 목소리를 이용하지 마세요. 하지만 가능한 음원이 있을 수 있으니 이 점은 확인해주세요.
        </p>
        <p>개인, 팬클럽, 상업적인 관계없이 비상업적 용도 내에서 자유롭게 사용하실 수 있습니다.</p>
      </div>
    </template>
  </contents>
</template>
