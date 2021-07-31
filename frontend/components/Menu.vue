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
  .menu {
    ul {
      display: flex;
      margin: 0 -20px;

      li {
        margin: 0 20px;

        a {
          color: inherit;
          text-decoration: none;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 20px;
          text-transform: uppercase;
        }
      }
    }
  }
</style>