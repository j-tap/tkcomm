<template>
  <figure class="news-item">
    <div>
      <img v-if="item.images" :src="getStrapiMedia(item.images[0].url)" />
    </div>
  </figure>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias';

export default {
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    getStrapiMedia,
  },
};
</script>
