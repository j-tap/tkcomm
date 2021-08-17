<template>
  <nav class="menu">
    <ul>
      <li v-for="item in items" :key="item.value">
        <NuxtLink :to="item.value">{{ item.text }}</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import menuList from '~/config/menu';

export default {
  data() {
    return {
      items: menuList,
    }
  },
}
</script>

<style lang="scss" scoped>
  $menu-item-indent: 15px;
  $menu-item-text-size: 20px;

  .menu {
    @include media('<=tablet') {
      display: none;
    }

    ul {
      display: flex;
      margin: 0 -#{$menu-item-indent} 0 -63px;

      @include media('<=tablet') {
        display: block;
      }

      li {
        margin: 0 $menu-item-indent;

        a {
          color: inherit;
          text-decoration: none;
          font-style: normal;
          font-weight: normal;
          font-size: $menu-item-text-size;
          line-height: 1;
          text-transform: uppercase;
        }
      }
    }
  }
</style>