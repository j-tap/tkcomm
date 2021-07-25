<template>
  <ul class="contact-centers">
    <li
      v-for="(item, ind) in items"
      :key="item.id"
    >
      <ContactCenter :item="{ index: ind, ...item }" />
    </li>
  </ul>
</template>

<script>
import ContactCenter from './item';

export default {
  components: {
    ContactCenter,
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
  .contact-centers {
    display: flex;
    margin: 0 -30px;
    max-width: 100%;
    padding: 0;

    li {
      margin: 0 30px 0;
    }
  }
</style>
