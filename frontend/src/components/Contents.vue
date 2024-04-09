<script lang="ts">
import { defineComponent } from 'vue'
import banner from './Banner.vue'

export default defineComponent({
  name: 'ContentsComponent',
  components: {
    banner
  }
})
</script>

<template>
  <banner
    ><template v-slot:left>
      <slot name="banner-left"></slot>
    </template>
    <template v-slot:right><slot name="banner-right"></slot></template
  ></banner>
  <div class="pt-16 w-full h-auto min-h-[100%] pb-48">
    <div class="px-12 sm:px-24 xl:px-40">
      <slot name="contents"></slot>
    </div>
  </div>
</template>
