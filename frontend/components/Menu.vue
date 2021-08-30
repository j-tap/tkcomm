<template>
  <ul :class="`${$type}__list`">
    <li :class="`${$type}__point`" v-for="item in items" :key="item.value">
      <NuxtLink :class="`${$type}__menu_link`" :to="item.value">{{ item.text }}</NuxtLink>
    </li>
  </ul>
</template>

<script>
import menuList from '~/config/menu';

export default {
  props: {
    humburger: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      items: menuList,
    }
  },

  computed: {
    $type() {
      return this.humburger ? 'humburger' : 'nav';
    },
  },

}
</script>

<style lang="scss" scoped></style>