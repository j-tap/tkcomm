<template>
  <article>
    <time v-if="data.published_at">{{ moment(data.published_at).format('DD.MM.YYYY') }}</time>
    <Heading1>
      <h1>{{ data.title }}</h1>
    </Heading1>
    <img v-if="data.images" :src="getStrapiMedia(data.image.url)" />
    <div v-html="$md.render(data.text)"></div>
  </article>
</template>

<script>
import { getStrapiMedia } from '~/utils/medias';
import moment from 'moment';

import Heading1 from '~/components/Heading1';

export default {
  components: {
    Heading1,
  },

  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },

  methods: {
    moment,
    getStrapiMedia,
  },
}
</script>

<style lang="scss" scoped></style>
