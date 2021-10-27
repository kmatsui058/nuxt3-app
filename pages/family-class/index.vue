<template>
  <section class="section">
    <h2 class="title is-2">Family Classes</h2>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="familyClass in familyClasses" :key="familyClass.zType">
          <tr :id="familyClass.zType">
            <td>
              <nuxt-link
                :key="familyClass.zType"
                :to="`/family-class/${familyClass.zType}`"
              >
                {{ familyClass.name }}
              </nuxt-link>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </section>
</template>

<script lang="ts" setup>
import familyClassesXml from "~/assets/data/xml/familyClass";
import FamilyClass from "~/classes/FamilyClass";

const familyClasses = computed((): FamilyClass[] => {
  return familyClassesXml.Root.Entry.map((item) => {
    return new FamilyClass(item);
  }).filter((nation) => nation.name);
});
</script>
