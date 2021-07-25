<template>
  <div class="service-item">
    <div>
      <h3>{{ item.title }}</h3>
      <img v-if="item.image" :src="getStrapiMedia(item.image.url)" />
      <p>{{ item.description }}</p>
      <a href="#" @click.prevent="showModal = true">подробнее</a>
      <div v-if="item.index !== undefined">{{ item.index }}</div>
    </div>

    <Modal v-model="showModal">
      <article>{{ item.text }}</article>
    </Modal>
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
      showModal: false,
    }
  },

  methods: {
    getStrapiMedia,
  },
};
</script>
