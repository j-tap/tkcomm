<template>
  <section class="page-content page-about">
    <Heading1 :title="data.title" />
    <div v-html="$md.render(data.text)"></div>
  </section>
</template>

<script>
import page from '~/mixins/page';

import Heading1 from '~/components/Heading1';

export default {
  components: {
    Heading1,
  },
  
  mixins: [page],

  async asyncData({ $strapi }) {
    const data = await $strapi.find('about');
    return {
      data,
    };
  },

  data() {
    return {};
  },

}
</script>

<style lang="scss" scoped></style>
