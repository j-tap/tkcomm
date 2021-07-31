<template>
  <section class="block-page index-licenses">
    <Heading1 :title="data.title" />
    <Licenses :items="data.items" />
  </section>
</template>

<script>
import Heading1 from '~/components/Heading1';
import Licenses from '~/components/Licenses/index';

export default {
  components: {
    Heading1,
    Licenses,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

}
</script>
