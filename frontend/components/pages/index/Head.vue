<template>
  <section class="block-page index-head" :style="`background-image: url(${getStrapiMedia(item.images[0].url)})`">
    <div class="index-head-content">
      <h1 class="index-head-title">{{ item.title }}</h1>
      <p class="index-head-subtitle">{{ item.description }}</p>
      <a href="#">Подробнее</a>
    </div>
    <span class="index-head__scroll-icon">
      <svg width="32" height="44" viewBox="0 0 32 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.282 4.4C11.118 4.4 9.508 4.7718 8.026 5.643C6.79005 6.35833 5.7803 7.46905 5.13 8.8286C4.338 10.4566 4 12.2298 4 15.708V28.2876C4 31.768 4.338 33.539 5.13 35.1692C5.804 36.5552 6.766 37.6134 8.026 38.3548C9.506 39.226 11.118 39.5978 14.282 39.5978H17.718C20.882 39.5978 22.492 39.226 23.974 38.3548C25.21 37.6395 26.2197 36.5288 26.87 35.1692C27.662 33.5412 28 31.768 28 28.2876V15.708C28 12.2276 27.662 10.4566 26.87 8.8264C26.2197 7.46685 25.21 6.35613 23.974 5.6408C22.494 4.7718 20.882 4.4 17.72 4.4H14.28H14.282ZM14.282 0H17.718C21.746 0 23.906 0.6116 25.862 1.7622C27.7946 2.88748 29.375 4.62592 30.398 6.7518C31.444 8.9034 32 11.2794 32 15.7102V28.2898C32 32.7206 31.444 35.0966 30.398 37.2482C29.375 39.3741 27.7946 41.1125 25.862 42.2378C23.906 43.3884 21.746 44 17.718 44H14.28C10.252 44 8.092 43.3884 6.136 42.2378C4.20338 41.1125 2.62298 39.3741 1.6 37.2482C0.556 35.0966 0 32.7206 0 28.2898V15.708C0 11.2772 0.556 8.9012 1.602 6.7496C2.62583 4.62422 4.20693 2.88654 6.14 1.7622C8.094 0.6116 10.254 0 14.282 0ZM14 8.8H18V19.8H14V8.8Z" fill="#0F65D9"/>
      </svg>
    </span>
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
    min-height: 100vh;
    box-sizing: border-box;
    background: 50% 50% no-repeat none;
    padding-top: 200px;

    &::before {
      content: '';
      // opacity: .63;
      pointer-events: none;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.63), rgba(255, 255, 255, 0.63));
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

    &__scroll-icon {
      position: absolute;
      left: 50%;
      bottom: 0;

      svg {
        position: absolute;
        left: -15px;
        bottom: 100px;
        width: 32px;
      }

      &::after {
        content: '';
        position: absolute;
        width: 3px;
        height: 78px;
        left: 0;
        bottom: 0;
        background: #0F65D9;
      }
    }
  }
</style>