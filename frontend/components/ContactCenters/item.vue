<template>
  <div>
    <div v-if="item.index !== undefined">{{ item.index }}</div>
    <h3>{{ item.title }}</h3>
    <p>{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
