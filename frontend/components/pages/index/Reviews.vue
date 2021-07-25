<template>
  <section class="block-index index-reviews">
    <Heading1 :title="data.title" />
    <Reviews :items="data.items" />
  </section>
</template>

<script>
import Heading1 from '~/components/Heading1';
import Reviews from '~/components/Reviews/index';

export default {
  components: {
    Heading1,
    Reviews,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

}
</script>
