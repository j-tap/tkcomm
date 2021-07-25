<template>
  <figure>
    <div>
      <img v-if="item.icon" :src="getStrapiMedia(item.icon.url)" height="100" />
    </div>
    <figcaption>
      <p>{{ item.title }}</p>
    </figcaption>
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
