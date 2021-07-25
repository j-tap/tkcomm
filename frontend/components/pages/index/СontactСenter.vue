<template>
  <section class="block-index index-contact-center">
    <Heading1 :title="data.title" />
    <ContactCenters :items="data.items" />
  </section>
</template>

<script>
import Heading1 from '~/components/Heading1';
import ContactCenters from '~/components/ContactCenters/index';

export default {
  components: {
    Heading1,
    ContactCenters,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

}
</script>
