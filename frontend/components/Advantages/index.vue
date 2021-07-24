<template>
  <ul>
    <li
      v-for="item in items"
      :key="item.id"
    >
      <Advantage :item="item" />
    </li>
  </ul>
</template>

<script>
import Advantage from './item';

export default {
  components: {
    Advantage,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
