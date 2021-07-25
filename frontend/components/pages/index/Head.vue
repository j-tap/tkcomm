<template>
  <section class="block-index index-head" :style="`background-image: url(${getStrapiMedia(item.images[0].url)})`">
    <div class="index-head-content">
      <h1 class="index-head-title">{{ item.title }}</h1>
      <p class="index-head-subtitle">{{ item.description }}</p>
      <a href="#">Подробнее</a>
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

<style lang="scss" scoped>
  .index-head {
    color: #fff;
    min-height: 100vh;
    box-sizing: border-box;
    background: 50% 50% no-repeat none;

    &::before {
      content: '';
      pointer-events: none;
      background: linear-gradient(0deg, rgba(1, 2, 5, 0.72), rgba(1, 2, 5, 0.72));
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &-content {
      position: relative;
    }

    &-title {
      font-style: normal;
      font-weight: normal;
      font-size: 100px;
      line-height: 1;
      text-transform: uppercase;
    }
    &-subtitle {
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 40px;
    }
  }
</style>