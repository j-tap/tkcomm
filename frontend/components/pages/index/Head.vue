<template>
  <section class="block-page index-head" :style="`background-image: url(${getStrapiMedia(item.images[0].url)})`">
    <div class="index-head-content">
      <div class="container-fluid">
        <h1 class="index-head-title" v-html="item.title"></h1>
        <p class="index-head-subtitle" v-html="item.description"></p>
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

<style lang="scss" scoped>
  .index-head {
    min-height: 100vh;
    box-sizing: border-box;
    background: 0 0 no-repeat none;
    padding-top: $main-top-offset;

    &-content {
      position: relative;
      margin-top: 38px;

      .container-fluid {
        @include media('>tablet') {
          padding-left: 133px + $container-fluid-offset-h;
          padding-right: 133px + $container-fluid-offset-h;
        }
      }
    }

    &-title {
      font-style: normal;
      font-weight: normal;
      font-size: 80px;
      line-height: 1.2;
      text-transform: uppercase;

      @include media('<=tablet') {
        font-size: 40px;
      }
    }
    &-subtitle {
      font-style: normal;
      font-weight: normal;
      font-size: 30px;
      line-height: 40px;
    }

    &__scroll-icon {
      position: absolute;
      left: 50%;
      bottom: 0;
      margin-left: 10px;

      svg {
        position: absolute;
        left: -15px;
        bottom: 60px;
        width: 32px;
      }

      &::after {
        content: '';
        position: absolute;
        width: 3px;
        height: 49px;
        left: 0;
        bottom: 0;
        background: #0F65D9;
      }
    }
  }
</style>