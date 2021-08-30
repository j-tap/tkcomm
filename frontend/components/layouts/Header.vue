<template>
  <header class="header__main section" :style="`background-image: url(${getStrapiMedia(hero.images[0].url)})`">
    <img src="~/assets/icons/line_bg.svg" alt="line" class="line__bg">
    <nav class="nav">
      <div class="humburger">
        <span class="humburger__line"></span>
        <span class="humburger__long"></span>
        <span class="humburger__line"></span>
      </div>
      <div class="humburger__menu">
        <div class="humburger__close">
          <span class="humburger__left"></span>
          <span class="humburger__right"></span>
        </div>
        <Menu humburger />
        <address class="humburger__contact">
          <img src="~/assets/icons/phone.svg" alt="phone" class="humburger__phone">
          <a class="humburger__phone_link" :href="`tel:${global.contacts.phone1}`">{{ global.contacts.phone1 }}</a>
        </address>
      </div>
      <div class="nav__logo">
        <Logo />
      </div>
      <div class="nav__menu">
        <Menu />
      </div>
      <address class="nav__contact">
        <img src="~/assets/icons/phone.svg" alt="phone" class="nav__phone">
        <a class="nav__phone_link" :href="`tel:${global.contacts.phone1}`">{{ global.contacts.phone1 }}</a>
      </address>
    </nav>
    <div class="header__main_container">
      <h1 class="header__main_title" v-html="hero.title">ТЕХНОЛОГИИ КОММУНИКАЦИИ1 - это гарантия качества</h1>
      <hr class="header__main_line subline">
      <div class="header__main_subtitle">
        <div class="html-text" v-html="hero.description"></div>
      </div>
      <a href="#" class="header__main_link">
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" class="header__main_plus">
          <circle cx="33" cy="33" r="18.5" stroke="#313131"/>
          <circle cx="33" cy="33" r="32.5" stroke="#313131"/>
          <line x1="33.058" y1="27.4727" x2="33.058" y2="38.5269" stroke="#313131"/>
          <line y1="-0.5" x2="11.0543" y2="-0.5" transform="matrix(1 0 0 -1 27.3992 32.6313)" stroke="#313131"/>
        </svg>
        <div class="header__main_plus-wrapper">
          Подробнее
          <hr class="subline subline__link subline__plus">
        </div>
      </a>
    </div>
    <img src="~/assets/icons/scroll.svg" alt="scroll" class="header__main_scroll">
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import { getStrapiMedia } from '~/utils/medias';

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
      'hero',
    ])
  },

  methods: {
    getStrapiMedia,
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
