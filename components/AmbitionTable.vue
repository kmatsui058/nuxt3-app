<template>
  <table class="table is-fullwidth">
    <thead>
      <tr>
        <th>Name</th>
        <th>Family Class: weight</th>
        <th>Min Tier</th>
        <th>Max Tier</th>
        <th>Ambition Class</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="goal in goals" :key="goal.zType">
        <tr :id="goal.zType">
          <td>
            <nuxt-link :key="goal.zType" :to="`/goal/${goal.zType}`">
              {{ goal.name }}
            </nuxt-link>
          </td>
          <td>
            <template
              v-for="familyClassWeights in goal.familyClassWeights"
              :key="familyClassWeights.zIndex"
            >
              <nuxt-link :to="`/family-class/${familyClassWeights.zIndex}`">
                {{ familyClassWeights.name }}
              </nuxt-link>
              : {{ familyClassWeights.entry.iValue }}
            </template>
          </td>
          <td>{{ goal.entry.iMinTier }}</td>
          <td>{{ goal.entry.iMaxTier }}</td>
          <td>{{ goal.entry.iAmbitionClass }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

<script lang="ts" setup>
import Goal from "~/classes/Goal";
const props = defineProps<{goals: Goal[]}>()
</script>
