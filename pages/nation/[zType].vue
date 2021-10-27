<template>
  <section class="section">
    <h2 class="title is-2">
      <nuxt-link to="/nation/">
        Nation
      </nuxt-link>/ {{ nation.name }}
    </h2>
    <section id="nation" class="section">
      <h3 class="title">
        Starting Tech
      </h3>
      <hr>
      <template v-for="tech in nation.teches" :key="tech.zType">
        <nuxt-link :to="`/tech/${tech.zType}`">
          {{ tech.name }}
        </nuxt-link>
      </template>
    </section>
  </section>
</template>

<script lang="ts" setup>
import nationXml from '@/assets/data/xml/nation'
import Nation from '@/classes/Nation'

const route = useRoute()
  const nation  = computed((): Nation => {
    const entry = nationXml.Root.Entry.find((item) => {
      return item.zType === route.params.zType
    })
    if (!entry) {
      throw new Error('not found')
    }
    return new Nation(entry)
  })

</script>
