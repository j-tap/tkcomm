<template>
  <div class="uk-card uk-card-muted" :key="item.id">
    <div class="uk-card-media-top">
      <img v-if="item.icon" :src="getStrapiMedia(item.icon.url)" height="100" />
    </div>
    <div class="uk-card-body">
      <p id="title" class="uk-text-large">{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import { getStrapiMedia } from '../../utils/medias';

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
