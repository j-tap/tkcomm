<template>
  <div>
    <!-- <pre>{{homepage.hero.image}}</pre> -->

    <div class="uk-section">
      <div
        class="uk-container uk-container-large"
        :style="`background: url(${getStrapiMedia(homepage.hero.image[0].url)}) 50% 50% no-repeat`"
      >
        <h1>{{ homepage.hero.title }}</h1>
        <article>{{ homepage.hero.description }}</article>
      </div>
    </div>

    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h2>{{ homepage.about.title }}</h2>
        <article>{{ homepage.about.text }}</article>
      </div>
    </div>

    <Advantages :items="advantages" />

    <!-- <Articles :articles="articles" /> -->

  </div>
</template>

<script>
// import Articles from '../components/Articles';
import Advantages from '../components/Advantages/index';
import { getMetaTags } from '../utils/seo';
import { getStrapiMedia } from '../utils/medias';

export default {
  components: {
    // Articles,
    Advantages,
  },
  async asyncData({ $strapi }) {
    return {
      // articles: await $strapi.find('articles'),
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

  methods: {
    getStrapiMedia,
  }

};
</script>
