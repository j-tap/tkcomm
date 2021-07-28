<template>
  <section class="block-index index-news">
    <Heading1 :title="data.title" />
    <News :items="data.items" />
  </section>
</template>

<script>
import Heading1 from '~/components/Heading1';
import News from '~/components/News/index';

export default {
  components: {
    Heading1,
    News,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

}
</script>
