<template>
  <div class="review-item">
    <img v-if="item.logo" :src="getStrapiMedia(item.logo.url)" />
    <div>{{ item.position }}</div>
    <h3>{{ item.name }}</h3>
    <div>{{ item.created_at }}</div>
    <p>{{ item.description }}</p>
    <div v-if="item.attach">
      <div>{{ item.attach }}</div>
      <span>Благодарственное письмо</span>
    </div>
  </div>
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
