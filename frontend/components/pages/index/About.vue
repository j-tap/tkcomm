<template>
  <section class="index-about">
    <h2>{{ item.title }}</h2>
    <article>{{ item.text }}</article>
  </section>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
}
</script>

<style></style>