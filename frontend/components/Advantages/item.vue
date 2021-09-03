<template>
  <div class="tab__advantage_inner">
    <!-- :src="getStrapiMedia(item.icon.url)" -->
    <img src="~/assets/icons/pen.svg" alt="pen" class="tab__advantage_img">
    <p class="tab__advantage_text">{{ item.title }}</p>
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
