<template>
  <section class="block-page index-about">
    <Heading1 :title="data.title" />

    <div class="about-info">
      <div>
        <article>{{ data.text }}</article>
      </div>
      <div>
        <img :src="getStrapiMedia(data.images[0].url)" alt=" " />
      </div>
    </div>

    <Heading2 :title="data.advantages.title" />

    <Advantages :data="data.advantages" />
  
  </section>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias';

import Heading1 from '~/components/Heading1';
import Heading2 from '~/components/Heading2';
import Advantages from '~/components/Advantages/index';

export default {
  components: {
    Heading1,
    Heading2,
    Advantages,
  },

  props: {
    data: {
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
  .about-info {
    display: flex;
  }
</style>
