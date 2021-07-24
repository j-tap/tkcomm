<template>
  <section class="index-advantages">
    <Advantages :items="items" />
  </section>
</template>

<script>
import Advantages from '~/components/Advantages/index';

export default {
  components: {
    Advantages,
  },

  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },

}
</script>

<style></style>