<template>
    <div>{{value}}{{data}}
        <fuga :fuga="0"/>
    </div>
</template>
<script setup lang="ts">
import fuga from '@/components/fuga.vue'
const tu = {ho: 'ho'}
const te = tu.fu
const value = ref('hoge')
const { data } = await useAsyncData('count', async ()=>{ return 1 })
</script>

