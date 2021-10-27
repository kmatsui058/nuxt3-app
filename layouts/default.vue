<template>
  <div>
    <header>
      <common-header />
    </header>
    <div class="container">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import CommonHeader from '@/components/CommonHeader.vue'

</script>
