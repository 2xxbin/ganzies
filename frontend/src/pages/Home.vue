<script lang="ts">
import { defineComponent } from 'vue'
import contents from '@/components/Contents.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    contents
  }
})
</script>

<template>
  <contents>
    <template v-slot:banner-left
      ><div class="w-full h-full flex justify-center items-center flex-col px-16">
        <h3 class="font-notoSans font-bold text-2xl text-white">GANZIES / 간지즈</h3>
        <p class="mt-6 font-notoSans font-medium text-white text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam.
        </p>
      </div></template
    >
    <template v-slot:banner-right
      ><div class="relative w-full">
        <img src="https://source.unsplash.com/random/400x200" alt="banner" class="w-full h-full bg-gray-200 object-cover" /></div
    ></template>
    <template v-slot:contents>
      <h1 class="font-notoSans font-bold text-4xl">업데이트</h1>
      <div class="grid grid-flow-col grid-cols-2 mt-10 aspect-[1.5/1] gap-2 lg:gap-6">
        <div class="bg-blue-500"></div>
        <div class="bg-blue-300"></div>
        <div class="bg-red-500 row-span-2"></div>
      </div>
    </template>
  </contents>
</template>
