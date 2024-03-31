<script lang="ts">
import { defineComponent } from 'vue'
import banner from '@components/Banner.vue'

export default defineComponent({
  name: 'HomePage',
  components: {
    banner
  }
})
</script>

<template>
  <div>
    <banner
      ><template v-slot:left>
        <div class="w-full h-full flex justify-center items-center flex-col px-16">
          <h3 class="font-notoSans font-bold text-2xl text-white">GANZIES / 간지즈</h3>
          <p class="mt-6 font-notoSans font-medium text-white text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </template>
      <template v-slot:right> <div class="w-full h-full bg-blue-200"></div></template
    ></banner>
  </div>
  <div class="pt-16 w-full h-auto min-h-screen pb-48">
    <div class="px-24"><h1 class="font-notoSans font-bold text-4xl">업데이트</h1></div>
  </div>
</template>
