<template>
  <section class="page-content page-news-list">
    <News :items="dataList" />
  </section>
</template>

<script>
import page from '~/mixins/page';

import News from '~/components/News/index';

export default {
  components: {
    News,
  },

  mixins: [page],

  async asyncData({ $strapi, store, params }) {
    const dataList = await $strapi.find('updates');
    return {
      dataList,
    };
  },

  data() {
    return {
      seo: {
        metaTitle: 'Новости',
      },
    }
  },

}
</script>

<style lang="scss" scoped></style>
