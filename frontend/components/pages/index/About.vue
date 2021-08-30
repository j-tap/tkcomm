<template>
  <section class="section tab">
    <img src="~/assets/icons/section_logo.svg" alt="logo" class="section__logo">
    <h2 class="tab__title">{{ data.title }}</h2>
    <div class="tab__text">
      <article class="html-text" v-html="data.text"></article>
    </div>
    <div class="tab__content">
        <div class="tab__item">Горячая линия
            <div class="tab__info">
                <div class="tab__info_wrapper">
                    <div class="tab__close">
                        <img src="~/assets/icons/service_close.svg" alt="close" class="tab__close_img">
                    </div>
                    В ходе рекламной компании или акции существенно увеличивается объем поступающих звонков в компанию. Сотрудникам сложно справиться с таким наплывом, поэтому возникает необходимость в услугах колл-центров.
                </div>
            </div>
        </div>
        <div class="tab__item">Техническая поддержка
            <div class="tab__info">
                <div class="tab__info_wrapper">
                    <div class="tab__close">
                        <img src="~/assets/icons/service_close.svg" alt="close" class="tab__close_img">
                    </div>
                    В ходе рекламной компании или акции существенно увеличивается объем поступающих звонков в компанию. Сотрудникам сложно справиться с таким наплывом, поэтому возникает необходимость в услугах колл-центров.
                </div>
            </div>
        </div>
        <div class="tab__item">Виртуальный секретарь
            <div class="tab__info">
                <div class="tab__info_wrapper">
                    <div class="tab__close">
                        <img src="~/assets/icons/service_close.svg" alt="close" class="tab__close_img">
                    </div>
                    В ходе рекламной компании или акции существенно увеличивается объем поступающих звонков в компанию. Сотрудникам сложно справиться с таким наплывом, поэтому возникает необходимость в услугах колл-центров.
                </div>
            </div>
        </div>
        <div class="tab__item">Диспетчерская служба заказов
            <div class="tab__info">
                <div class="tab__info_wrapper">
                    <div class="tab__close">
                        <img src="~/assets/icons/service_close.svg" alt="close" class="tab__close_img">
                    </div>
                    В ходе рекламной компании или акции существенно увеличивается объем поступающих звонков в компанию. Сотрудникам сложно справиться с таким наплывом, поэтому возникает необходимость в услугах колл-центров.
                </div>
            </div>
        </div>
        <div class="tab__item">Телефонные опросы и анкетирование
            <div class="tab__info">
                <div class="tab__info_wrapper">
                    <div class="tab__close">
                        <img src="~/assets/icons/service_close.svg" alt="close" class="tab__close_img">
                    </div>
                    В ходе рекламной компании или акции существенно увеличивается объем поступающих звонков в компанию. Сотрудникам сложно справиться с таким наплывом, поэтому возникает необходимость в услугах колл-центров.
                </div>
            </div>
        </div>
        <div class="tab__item">Холодный обзвон
            <div class="tab__info">
                <div class="tab__info_wrapper">
                    <div class="tab__close">
                        <img src="~/assets/icons/service_close.svg" alt="close" class="tab__close_img">
                    </div>
                    В ходе рекламной компании или акции существенно увеличивается объем поступающих звонков в компанию. Сотрудникам сложно справиться с таким наплывом, поэтому возникает необходимость в услугах колл-центров.
                </div>
            </div>
        </div>
        <div class="tab__item">Обработка звонков и заявок
            <div class="tab__info">
                <div class="tab__info_wrapper">
                    <div class="tab__close">
                        <img src="~/assets/icons/service_close.svg" alt="close" class="tab__close_img">
                    </div>
                    В ходе рекламной компании или акции существенно увеличивается объем поступающих звонков в компанию. Сотрудникам сложно справиться с таким наплывом, поэтому возникает необходимость в услугах колл-центров.
                </div>
            </div>
        </div>
    </div>
    <div class="tab__doki">
        <div class="tab__doki_img"><img src="~/assets/icons/file_wt.svg" alt="file"></div>
        <div class="tab__doki_text">Перейти к документам</div>
    </div>
    <div class="tab__advantage">
        <h2 class="tab__advantage_title">{{ data.advantages.title }}</h2>
        <Advantages :data="data.advantages" />
    </div>
  </section>
  <!-- <section class="block-page index-about">
    <Heading1 :title="data.title" />

    <div class="about-info">
      <div>
        <article>{{ data.text }}</article>
      </div>
      <div>
        <img :src="getStrapiMedia(data.images[0].url)" alt=" " />
      </div>
    </div>

    <Heading2 :title="data.advantages.title" />

    <Advantages :data="data.advantages" />
  
  </section> -->
</template>

<script>
// import { getStrapiMedia } from '~/utils/medias';

// import Heading1 from '~/components/Heading1';
// import Heading2 from '~/components/Heading2';
import Advantages from '~/components/Advantages/index';

export default {
  components: {
    // Heading1,
    // Heading2,
    Advantages,
  },

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  // methods: {
  //   getStrapiMedia,
  // },

}
</script>

<style lang="scss" scoped></style>
