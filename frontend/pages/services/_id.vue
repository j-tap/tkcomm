<template>
  <section class="page-content page-services-detail">
    <ServiceDetail :data="data" />
  </section>
</template>

<script>
import page from '~/mixins/page';

import ServiceDetail from '~/components/Services/detail';

export default {
  components: {
    ServiceDetail,
  },

  mixins: [page],

  async asyncData({ $strapi, store, params }) {
    const matchingServices = await $strapi.find('services', {
      id: params.id,
    });
    return {
      data: matchingServices[0] || {},
    };
  },

  data() {
    return {};
  },

  validate({ params }) {
    return !!params.id;
  },

}
</script>

<style lang="scss" scoped></style>
