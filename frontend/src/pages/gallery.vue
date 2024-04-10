<script lang="ts">
import contents from '@/components/Contents.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GalleryPage',
  components: {
    contents
  },
  data() {
    return {
      photos: [
        '@/assets/sub-banner1.png',
        'https://source.unsplash.com/random/400x300',
        'https://source.unsplash.com/random/400x300',
        'https://source.unsplash.com/random/400x300',
        'https://source.unsplash.com/random/400x300',
        'https://source.unsplash.com/random/400x300',
        'https://source.unsplash.com/random/400x300',
        'https://source.unsplash.com/random/400x300',
        'https://source.unsplash.com/random/400x300',
        'https://source.unsplash.com/random/400x300',
        'https://source.unsplash.com/random/400x300',
        'https://source.unsplash.com/random/400x300'
      ]
    }
  }
})
</script>
<template>
  <contents>
    <template v-slot:banner-left
      ><div class="w-full h-full flex justify-center flex-col px-16">
        <h3 class="font-notoSans font-bold text-2xl text-white">명예의 전당</h3>
        <p class="mt-6 font-notoSans font-medium text-subtitle-text break-keep leading-10">
          KUNGOM님과 UOOZ님의 팥쥐의 전생 & 나가의 이야기를 들어보세요.
        </p>
      </div></template
    >
    <template v-slot:banner-right><div class="w-full h-full bg-blue-200"></div></template>
    <template v-slot:contents>
      <h1 class="font-bold text-4xl mb-8">갤러리</h1>
      <div class="w-full grid max-sm:grid-cols-2 grid-cols-4 gap-4">
        <div
          v-for="photo in photos"
          :key="photo"
          class="bg-gray-300 bg-cover bg-no-repeat w-full h-full aspect-[4/3]"
          :class="`bg-[url('${photo}')]`"
        ></div>
      </div>
    </template>
  </contents>
</template>
