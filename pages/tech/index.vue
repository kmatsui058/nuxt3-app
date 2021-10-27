<template>
  <section class="section">
    <h2 class="title is-2">TECHES</h2>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
          <th>Cost</th>
          <th>Prerequisite</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="tech in teches" :key="tech.zType">
          <tr :id="tech.zType">
            <td>
              <nuxt-link :to="`/tech/${tech.zType}`">
                {{ tech.name }}
              </nuxt-link>
            </td>
            <td>
              {{ tech.entry.iCost }}
            </td>
            <td>
              <template
                v-for="(preTech, index) in tech.techPreReq"
                :key="preTech.zType"
              >
                <nuxt-link :to="`/tech/${preTech.zType}`">
                  {{ preTech.name }}
                </nuxt-link>
                <template v-if="index + 1 < tech.techPreReq.length">
                  /
                </template>
              </template>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts">
import techesXML from "~/assets/data/xml/tech";
import Tech from "~/classes/Tech";

const teches = computed((): Tech[] => {
  return techesXML.Root.Entry.map((item) => {
    return new Tech(item);
  }).filter((nation) => nation.name);
});
</script>
