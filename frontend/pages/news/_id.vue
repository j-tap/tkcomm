<template>
  <section class="page-content page-news-detail">
    <NewsDetail :data="data" />
  </section>
</template>

<script>
import page from '~/mixins/page';

import { getStrapiMedia } from '~/utils/medias';

import NewsDetail from '~/components/News/detail';

export default {
  components: {
    NewsDetail,
  },

  mixins: [page],

  async asyncData({ $strapi, store, params }) {
    const matchingNews = await $strapi.find('updates', {
      id: params.id,
    });
    return {
      data: matchingNews[0] || {},
    };
  },

  data() {
    return {
      seo: {
        article: true,
      },
    };
  },

  methods: {
    getStrapiMedia,
  },

}
</script>

<style lang="scss" scoped></style>
