<template>
  <div class="news-item">
    <NuxtLink :to="`${path}${item.id}`">
      <time v-if="item.published_at">{{ moment(item.published_at).format('DD.MM.YYYY') }}</time>
      <figure class="news-item__img">
        <img v-if="item.images" :src="getStrapiMedia(item.images[0].formats.medium.url)" />
        <figcaption>{{ item.title }}</figcaption>
      </figure>
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </NuxtLink>
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias';
import moment from 'moment';

export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      path: /news/,
    }
  },

  methods: {
    moment,
    getStrapiMedia,
  },
};
</script>

<style lang="scss" scoped>
  .news-item {
    a {
      color: inherit;
      text-decoration: none;
    }

    &__img {
      position: relative;
      overflow: hidden;
      width: 421px;
      height: 256px;

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

      figcaption {
        position: absolute;
        left: -9999px;
        opacity: 0;
      }
    }
  }
</style>
