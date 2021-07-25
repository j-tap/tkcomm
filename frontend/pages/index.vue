<template>
  <div class="page-content page-content--index">
    <!-- <pre>{{homepage}}</pre> -->
    <IndexHead :item="homepage.hero" />
    <IndexAbout :data="homepage.about" />
    <IndexСontactСenter :data="homepage.contact_center" />
    <IndexLicenses :data="homepage.licenses" />
    <IndexServices :data="homepage.services" />
    <IndexReviews :data="homepage.reviews" />
    <IndexFeedback />
  </div>
</template>

<script>
import IndexHead from '~/components/pages/index/Head';
import IndexAbout from '~/components/pages/index/About';
import IndexСontactСenter from '~/components/pages/index/СontactСenter';
import IndexLicenses from '~/components/pages/index/Licenses';
import IndexServices from '~/components/pages/index/Services';
import IndexReviews from '~/components/pages/index/Reviews';
import IndexFeedback from '~/components/pages/index/Feedback';

import { getMetaTags } from '~/utils/seo';
import { getStrapiMedia } from '~/utils/medias';

export default {
  components: {
    IndexHead,
    IndexAbout,
    IndexСontactСenter,
    IndexLicenses,
    IndexServices,
    IndexReviews,
    IndexFeedback,
  },

  async asyncData({ $strapi, store }) {
    const global = await $strapi.find('global');
    const homepage = await $strapi.find('homepage');

    store.commit('setGlobal', global);

    return {
      homepage,
      global,
    };
  },

  head() {
    const { seo } = this.homepage;
    const { defaultSeo, favicon, siteName } = this.global;

    // Merge default and article-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      ...seo,
    };

    return {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [
        {
          rel: 'favicon',
          href: favicon.url ? getStrapiMedia(favicon.url) : null,
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
  .page-content--index {
    & > .block-index:first-child {
      padding-top: 200px;
    }
  }
</style>
