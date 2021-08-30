<template>
  <section class="block-page index-head" :style="`background-image: url(${getStrapiMedia(item.images[0].url)})`">
    <div class="index-head-content">
      <div class="container-fluid">
        <h1 class="index-head-title" v-html="item.title"></h1>
        <div class="index-head-subtitle" v-html="item.description"></div>
        <a href="#">Подробнее</a>
      </div>
    </div>
    <span class="index-head__scroll-icon">
      <IconMouse icon-color="#0F65D9" />
    </span>
  </section>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias';

import IconMouse from '~/components/icons/IconMouse';

export default {
  components: {
    IconMouse,
  },

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

<style lang="scss" scoped></style>