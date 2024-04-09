<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BannerComponent'
})
</script>

<template>
  <div class="w-full h-96 flex flex-[10] flex-col sm:flex-row">
    <div class="flex sm:flex-[3.5] bg-header-brown overflow-hidden py-12"><slot name="left"></slot></div>
    <div class="flex sm:flex-[6.5] h-full"><slot name="right"></slot></div>
  </div>
</template>
