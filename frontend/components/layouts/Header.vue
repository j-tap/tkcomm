<template>
  <header class="header">
    <Logo />
    <Menu />
    <address class="header-address" v-if="global.contacts">
      <div v-if="global.contacts.phone1">
        <IconPhone/>
        <a :href="`tel:${global.contacts.phone1}`">{{ global.contacts.phone1 }}</a>
      </div>
      <div v-if="global.contacts.phone2">
        <IconPhone/>
        <a :href="`tel:${global.contacts.phone2}`">{{ global.contacts.phone2 }}</a>
      </div>
    </address>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';

import Logo from '~/components/Logo';
import Menu from '~/components/Menu';
import IconPhone from '~/components/icons/IconPhone';

export default {
  components: {
    Logo,
    Menu,
    IconPhone,
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

    &-address {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 1;

      & > * {
        display: flex;
        align-items: center;
      }

      svg {
        margin-right: 15px;
      }

      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
</style>
