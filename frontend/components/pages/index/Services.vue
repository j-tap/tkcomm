<template>
  <section class="block-page index-services">
    <Heading1 :title="data.title" />
    <Services :items="data.items" />
  </section>
</template>

<script>
import Heading1 from '~/components/Heading1';
import Services from '~/components/Services/index';

export default {
  components: {
    Heading1,
    Services,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

}
</script>
