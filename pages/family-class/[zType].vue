<template>
  <section class="section">
    <h2 class="title is-2">
      <nuxt-link to="/family-class/"> Family Class </nuxt-link>/
      {{ familyClass.name }}
    </h2>
    <section id="family" class="section">
      <h3 class="title">Family</h3>
      <hr />
      <div class="content">
        <template
          v-for="(family, index) in familyClass.families"
          :key="family.zType"
        >
          <nuxt-link :to="`/family/${family.zType}`">
            {{ family.name }}
          </nuxt-link>
          (<nuxt-link :to="`/nation/${family.nation.zType}`">
            {{ family.nation.name }} </nuxt-link
          >)
          <template v-if="index + 1 < familyClass.families.length">
            /
          </template>
        </template>
      </div>
    </section>
    <section id="effect-city" class="section">
      <h3 class="title">Effect City</h3>
      <hr />
      <div class="content">
        <h4>Yield</h4>
        <p v-if="familyClass.effectCity.yields.length">
          <template v-for="(yeild, index) in familyClass.effectCity.yields">
            {{ yeild.zIndex }}: {{ yeild.iValue }}
            <template v-if="index + 1 < familyClass.effectCity.yields.length">
              /
            </template>
          </template>
        </p>
        <p v-else>-</p>
        <h4>Free Promotion</h4>
        <p>
          {{
            familyClass.effectCity.entry.aeFreePromotion
              ? familyClass.effectCity.entry.aeFreePromotion.zValue
              : "-"
          }}
        </p>
      </div>
    </section>
    <section id="abmitions" class="section">
      <h3 class="title">Ambitions</h3>
      <hr />
      <ambition-table :goals="familyClass.ambitions" />
    </section>
  </section>
</template>

<script lang="ts" setup>
import familyClasses from "~/assets/data/xml/familyClass";
import FamilyClass from "~/classes/FamilyClass";
import AmbitionTable from "~/components/AmbitionTable.vue";

const route = useRoute();
const familyClass = computed((): FamilyClass => {
  const entry = familyClasses.Root.Entry.find((item) => {
    return item.zType === route.params.zType;
  });
  if (!entry) {
    throw new Error("not found");
  }
  return new FamilyClass(entry);
});
</script>
