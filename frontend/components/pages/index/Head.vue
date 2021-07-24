<template>
  <section class="index-head">
    <div
      :style="`background: url(${getStrapiMedia(item.image[0].url)}) 50% 50% no-repeat`"
    >
      <h1>{{ item.title }}</h1>
      <article>{{ item.description }}</article>
    </div>
  </section>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias';

export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },

  methods: {
    getStrapiMedia,
  },

}
</script>

<style></style>