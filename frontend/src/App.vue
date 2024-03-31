<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'app',
  data() {
    return {
      pages: [
        { title: '홈', to: '/' },
        { title: '이용규약', to: '/eula' },
        { title: '다운로드', to: '/download' },
        { title: '갤러리', to: '/gallery' }
      ]
    }
  }
})
</script>

<template>
  <div id="app">
    <header>
      <div class="w-full h-20 flex flex-[10]">
        <div class="flex flex-[3.5] bg-header-brown">
          <div class="w-full h-full flex items-center ml-6">
            <h1 class="font-notoSans font-bold text-3xl text-header-yelow">GANZIES</h1>
          </div>
        </div>
        <div class="flex flex-[6.5] justify-end">
          <div class="flex w-1/3 h-full justify-between items-center mr-24">
            <router-link
              class="font-notoSans no-underline text-black hover:text-header-yelow transition-colors ease-in-out"
              v-for="page in pages"
              :to="page.to"
              :key="page.to"
              >{{ page.title }}</router-link
            >
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>
