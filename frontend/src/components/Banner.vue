<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BannerComponent'
})
</script>

<template>
  <div class="w-full h-96 flex flex-[10]">
    <div class="flex flex-[3.5] bg-header-brown"><slot name="left"></slot></div>
    <div class="flex flex-[6.5]"><slot name="right"></slot></div>
  </div>
</template>
