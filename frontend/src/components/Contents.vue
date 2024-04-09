<script lang="ts">
import { defineComponent } from 'vue'
import banner from './Banner.vue'

export default defineComponent({
  name: 'ContentsComponent',
  components: {
    banner
  },
  props: {
    isMarginBottom: {
      type: Boolean,
      required: false,
      default: true
    }
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
  <div class="w-full h-auto min-h-[100%]" :class="isMarginBottom ? 'pt-16' : ''">
    <div class="px-6 sm:px-24 xl:px-40">
      <slot name="contents"></slot>
    </div>
  </div>
</template>
