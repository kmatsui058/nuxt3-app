<template>
  <section class="section">
    <h2 class="title is-2">
      <nuxt-link to="/tech/"> Tech </nuxt-link>/ {{ tech.name }}
    </h2>
  </section>
</template>

<script lang="ts" setup>
import families from "@/assets/data/xml/tech";
import Tech from "@/classes/Tech";

const route = useRoute();
const tech = computed((): Tech => {
  const entry = families.Root.Entry.find((item) => {
    return item.zType === route.params.zType;
  });
  if (!entry) {
    throw new Error("not found");
  }
  return new Tech(entry);
});
</script>
