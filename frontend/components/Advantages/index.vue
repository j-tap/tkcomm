<template>
  <div>
    <div class="uk-child-width-1-2" uk-grid>
      <div>
        <Advantage
          v-for="item in items"
          :key="item.id"
          :item="item"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Advantage from './item';

export default {
  components: {
    Advantage,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
