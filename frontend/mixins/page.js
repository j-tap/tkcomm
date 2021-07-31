import { getStrapiMedia } from '~/utils/medias';
import { mapGetters } from 'vuex';
import { getMetaTags } from '~/utils/seo';

export default {
  computed: {
    ...mapGetters([
      'global',
    ])
  },

  methods: {
    getStrapiMedia,
  },

  head() {
    const { defaultSeo, favicon, siteName } = this.global;
    const currentSeo = {};

    /* Set SEO from component page */
    if (this.seo)
    {
      Object.assign(currentSeo, this.seo);
    }
    
    if (this.data)
    {
      /* Set SEO from page fields */
      if (this.data.title) currentSeo['metaTitle'] = this.data.title;

      if (this.data.description) currentSeo['metaDescription'] = this.data.description;

      if (this.data.image) currentSeo['shareImage'] = this.data.image;
      else if (this.data.images) currentSeo['shareImage'] = this.data.images[0];

      /* Set SEO from special seo field */
      if (this.data.seo)
      {
        Object.assign(currentSeo, this.data.seo);
      }
    }

    // Merge default and news-specific SEO data
    const fullSeo = {
      ...defaultSeo,
      ...currentSeo,
    };

    const result = {
      titleTemplate: `%s | ${siteName}`,
      title: fullSeo.metaTitle,
      meta: getMetaTags(fullSeo),
      link: [],
    };

    if (favicon)
    {
      result.link.push({
        rel: 'favicon',
        href: getStrapiMedia(favicon.url),
      });
    }

    return result;
  },
}
