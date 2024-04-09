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
  <div class="font-notoSans">
    <header>
      <div class="w-full h-20 flex flex-[10] flex-col sm:flex-row">
        <div class="flex flex-[3.5] bg-header-brown">
          <div class="w-full h-full flex items-center ml-6">
            <h1 class="font-notoSans font-bold text-3xl text-header-yelow">GANZIES</h1>
          </div>
        </div>
        <div class="flex flex-[6.5] justify-end">
          <div class="flex w-full sm:w-2/3 lg:w-1/3 h-full justify-between items-center mr-20 ml-20">
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
    <footer class="w-full h-48 relative translate-y-0">
      <hr class="bg-footer-background w-5/6 h-[5px] border-0" />
      <div class="w-full h-full pt-8 flex justify-center">
        <p class="font-medium">ⓒ 2024. 2xxbin, Duckchild. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<!-- <style>
body::-webkit-scrollbar {
  background-color: transparent;
  width: 12px;
}

body::-webkit-scrollbar-thumb {
  background-color: #424242;
  border-radius: 100px;
  padding-right: 2px;
}
</style> -->
