<template>
  <div>
    <div class="field is-horizontal">
      <div class="field">
        <label class="label">Tier</label>
        <p class="control">
          <span class="select">
            <select v-model="filterTier">
              <option :value="null">-</option>
              <option v-for="tier in tiers" :key="tier" :value="tier">
                {{ tier }}
              </option>
            </select>
          </span>
        </p>
      </div>
      <div class="field">
        <label class="label">Tier</label>
        <p class="control">
          <span class="select">
            <select v-model="filterTier">
              <option :value="null">-</option>
              <option v-for="tier in tiers" :key="tier" :value="tier">
                {{ tier }}
              </option>
            </select>
          </span>
        </p>
      </div>
    </div>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Tier</th>
          <th>Ambitions</th>
          <th>Family Class Weight</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(item, index) in flattenArray">
          <tr
            v-if="!(filterTier && item.tier !== filterTier)"
            :key="index"
            :class="{ 'not-desired': !item.isDesired }"
          >
            <td v-if="item.isFirst" :rowspan="item.rowSpan">
              {{ item.tier }}
            </td>
            <td>
              <nuxt-link :to="`/goal/${item.goal.zType}`">
                {{ item.goal.name }}
              </nuxt-link>
            </td>
            <td>
              <template
                v-for="familyClassWeights in item.goal.familyClassWeights"
                :key="familyClassWeights.zIndex"
              >
                <nuxt-link :to="`/family-class/${familyClassWeights.zIndex}`">
                  {{ familyClassWeights.name }}
                </nuxt-link>
                : {{ familyClassWeights.entry.iValue }}
              </template>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
import Goal from "~/classes/Goal";

const props = withDefaults(
  defineProps<{ goals: Goal[]; familyClassZType?: string | null }>(),
  { familyClassZType: null }
);

const filterTier: Tier | null = null;

const tiers = computed((): Tier[] => {
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
});

const amibitionByTier = computed(() => {
  return tiers.value.map((tier) => {
    const result: Goal[] = [];
    props.goals.forEach((goal) => {
      if (goal.minTier <= tier && tier <= goal.maxTier) {
        result.push(goal);
      }
    });
    return result;
  });
});

const flattenArray = computed(
  (): {
    tier: number;
    goal: Goal;
    isFirst: boolean;
    rowSpan: number;
    isDesired: boolean;
  }[] => {
    const result: {
      tier: number;
      goal: Goal;
      isFirst: boolean;
      rowSpan: number;
      isDesired: boolean;
    }[] = [];
    amibitionByTier.value.forEach((goals, i) => {
      goals.forEach((goal, j) => {
        result.push({
          tier: i + 1,
          goal,
          isFirst: j === 0,
          rowSpan: goals.length,
          isDesired: !!goal.familyClassWeights.find(
            (weight) => weight.familyClass.zType === props.familyClassZType
          ),
        });
      });
    });
    return result;
  }
);
</script>
<style lang="css" scoped>
.not-desired {
  opacity: 0.3;
}
</style>
