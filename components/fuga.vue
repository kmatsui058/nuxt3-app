<template>
    <div>{{ fuga }}</div>
</template>
<script lang="ts" setup>
const props = defineProps({fuga: {type: String, required: true}})
const fuga = computed(()=>props.fuga)
</script>