<template>
  <figure class="license-item">
    <div>
      <img v-if="item.image" :src="getStrapiMedia(item.image.url)" />
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
