<template>
  <div class="service-item">
    <NuxtLink :to="`${path}${item.id}`">
      <h3>{{ item.title }}</h3>
      <figure class="service-item__img">
        <img v-if="item.image" :src="getStrapiMedia(item.image.url)" />
      </figure>
      <p>{{ item.description }}</p>
      <div>
        <span>подробнее</span>
      </div>
      <!-- <a href="#" @click.prevent="showModal = true">подробнее</a> -->
      <div v-if="item.index !== undefined">{{ item.index }}</div>
    </NuxtLink>

    <!-- <Modal v-model="showModal">
      <article>{{ item.text }}</article>
    </Modal> -->
  </div>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias';

import Modal from '~/components/Modal';

export default {
  components: {
    Modal,
  },

  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      path: /services/,
      showModal: false,
    }
  },

  methods: {
    getStrapiMedia,
  },
};
</script>

<style lang="scss" scoped>
  .service-item {
    a {
      color: inherit;
      text-decoration: none;
    }
  }
</style>
