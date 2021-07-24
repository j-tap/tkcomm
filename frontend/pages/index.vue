<template>
  <div class="page-content page-content--index">
    <!-- <pre>{{homepage.hero.image}}</pre> -->
    <IndexHead :item="homepage.hero" />
    <IndexAbout :item="homepage.about" />
    <IndexAdvantages :items="advantages" />

  </div>
</template>

<script>
import IndexHead from '~/components/pages/index/Head';
import IndexAbout from '~/components/pages/index/About';
import IndexAdvantages from '~/components/pages/index/Advantages';

import { getMetaTags } from '~/utils/seo';
import { getStrapiMedia } from '~/utils/medias';

export default {
  components: {
    IndexHead,
    IndexAbout,
    IndexAdvantages,
  },
  async asyncData({ $strapi }) {
    return {
      advantages: await $strapi.find('advantages'),
      homepage: await $strapi.find('homepage'),
      global: await $strapi.find('global'),
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
