<template>
  <ul class="reviews">
    <li
      v-for="item in items"
      :key="item.id"
    >
      <Review :item="item" />
    </li>
  </ul>
</template>

<script>
import Review from './item';

export default {
  components: {
    Review,
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
  .reviews {
    display: flex;
    margin: 0 -30px;
    max-width: 100%;
    padding: 0;

    li {
      margin: 0 30px 0;
    }
  }
</style>
