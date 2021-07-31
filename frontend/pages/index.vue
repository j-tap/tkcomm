<template>
  <div class="page-content page-content--index">
    <!-- <pre>{{homepage}}</pre> -->
    <IndexHead :item="homepage.hero" />
    <IndexAbout :data="homepage.about" />
    <IndexСontactСenter :data="homepage.contact_center" />
    <IndexNews :data="homepage.news" />
    <!-- <IndexLicenses :data="homepage.licenses" /> -->
    <IndexServices :data="homepage.services" />
    <IndexReviews :data="homepage.reviews" />
    <IndexFeedback />
  </div>
</template>

<script>
import page from '~/mixins/page';

import IndexHead from '~/components/pages/index/Head';
import IndexAbout from '~/components/pages/index/About';
import IndexСontactСenter from '~/components/pages/index/СontactСenter';
// import IndexLicenses from '~/components/pages/index/Licenses';
import IndexNews from '~/components/pages/index/News';
import IndexServices from '~/components/pages/index/Services';
import IndexReviews from '~/components/pages/index/Reviews';
import IndexFeedback from '~/components/pages/index/Feedback';

export default {
  components: {
    IndexHead,
    IndexAbout,
    IndexСontactСenter,
    // IndexLicenses,
    IndexNews,
    IndexServices,
    IndexReviews,
    IndexFeedback,
  },

  mixins: [page],

  async asyncData({ $strapi, store }) {
    const homepage = await $strapi.find('homepage');
    return {
      homepage,
    };
  },

};
</script>

<style lang="scss" scoped>
  .page-content--index {
    & > .block-page:first-child {
      margin-top: -$main-top-offset;
    }
  }
</style>
