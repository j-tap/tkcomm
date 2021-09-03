<template>
  <section class="section tab">
    <img src="~/assets/icons/section_logo.svg" alt="logo" class="section__logo">
    <h2 class="tab__title">{{ data.title }}</h2>
    <div class="tab__text">
      <article class="html-text" v-html="data.text"></article>
    </div>
    <!-- TODO: вынести в компонент -->
    <div class="tab__content">
        <div 
            class="tab__item"
            v-for="item in data.classes"
            :key="item.id"
        >
            <span>{{ item.title }}</span>
            <div class="tab__info">
                <div class="tab__info_wrapper">
                    <div class="tab__close"></div>
                    <div v-html="item.text"></div>
                </div>
            </div>
        </div>
    </div>
    <a class="tab__doki" href="#">
        <div class="tab__doki_img"></div>
        <div class="tab__doki_text">Перейти к документам</div>
    </a>
    <div class="tab__advantage">
        <h2 class="tab__advantage_title">{{ data.advantages.title }}</h2>
        <Advantages :data="data.advantages" />
    </div>
  </section>
</template>

<script>
import Advantages from '~/components/Advantages/index';

export default {
  components: {
    Advantages,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

}
</script>

<style lang="scss" scoped></style>
