<template>
  <ul class="services">
    <li
      v-for="(item, ind) in items"
      :key="item.id"
    >
      <Service :item="{ index: ind, ...item }" />
    </li>
  </ul>
</template>

<script>
import Service from './item';

export default {
  components: {
    Service,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
  .services {
    display: flex;
    margin: 0 -30px;
    max-width: 100%;
    padding: 0;

    li {
      margin: 0 30px 0;
    }
  }
</style>
