<template>
  <ul class="news">
    <li
      v-for="item in items"
      :key="item.id"
    >
      <License :item="item" />
    </li>
  </ul>
</template>

<script>
import License from './item';

export default {
  components: {
    License,
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
  .news {
    display: flex;
    margin: 0 -30px;
    max-width: 100%;
    padding: 0;

    li {
      margin: 0 30px 0;
    }
  }
</style>
