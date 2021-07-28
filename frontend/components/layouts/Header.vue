<template>
  <header class="header">
    <Logo />
    <Menu />
    <address class="header-address">
      <div>
        <a :href="`tel:${global.contacts.phone1}`">{{ global.contacts.phone1 }}</a>
      </div>
      <div>
        <a :href="`tel:${global.contacts.phone2}`">{{ global.contacts.phone2 }}</a>
      </div>
    </address>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

import Logo from '~/components/Logo';
import Menu from '~/components/Menu';

export default {
  components: {
    Logo,
    Menu,
  },

  computed: {
    ...mapGetters([
      'global',
    ])
  },
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 7;
    top: 0;
    left: 0;
    width: 100%;
    padding: 30px 50px;

    .logo {
      margin-left: 25px;
    }

    &-address {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 1;

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
</style>
