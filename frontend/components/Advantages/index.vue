<template>
  <div class="tab__advantage_content">
    <div
      class="tab__advantage_item"
      v-for="item in data.items"
      :key="item.id"
    >
      <Advantage :item="item" />
    </div>
  </div>
</template>

<script>
import Advantage from './item';

export default {
  components: {
    Advantage,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style lang="scss" scoped>
  .advantages {
    display: flex;
    margin: 0 -30px;
    max-width: 100%;
    padding: 0;

    li {
      margin: 0 30px 0;
    }
  }
</style>
