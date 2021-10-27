<template>
  <section class="section">
    <h2 class="title is-2">
      AMBITIONS
    </h2>
    <ambition-table :goals="goals" />
  </section>
</template>

<script lang="ts" setup>
import goalsXML from '@/assets/data/xml/goal'
import Goal from '@/classes/Goal'
import AmbitionTable from '~/components/AmbitionTable.vue'

  const goals = computed((): Goal[] => {
    return goalsXML.Root.Entry.map((item) => {
      return new Goal(item)
    }).filter(test => test.name)
  })

</script>
