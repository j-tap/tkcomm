<template>
  <div id="fullpage">
    <Header/>

    <IndexAbout :data="homepage.about" />

    <section class="section service">
        <img src="icons/section_logo_blue.svg" alt="logo" class="section__logo">
        <img src="icons/line_bg.svg" alt="line" class="line__bg">
        <h2 class="service__title">Наши услуги</h2>
        <div class="service__list">
           <div class="service__wrapper">
                <div class="service__item service__active">
                    <img src="icons/pen.svg" alt="pen" class="service__item_img">
                    <img src="icons/pen_white.svg" alt="pen" class="service__item_img-active">
                    <p class="service__item_text">телемедицина</p>
                    <div class="service__content">
                        <div class="service__content_wrapper">
                            <div class="service__content_logo">
                                <h3 class="service__content_title">телемедицина</h3>
                                <img src="icons/pen_red.svg" alt="pen" class="serice__content_img">
                            </div>
                            <p class="service__content_text">Использование компьютерных и телекоммуникационных технологий для обмена медицинской информацией. Является одним из наиболее быстро растущих сегментов здравоохранения в мире.</p>
                            <p class="service__content_text">Телемедицина – это новый способ в сложившейся эпидемической ситуации взаимодействия врача с пациентом. Он представляет дистанционное оказание медицинских услуг.</p>
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
                    </div>
                </div>
                <div class="service__item">
                    <img src="icons/pen.svg" alt="pen" class="service__item_img">
                    <img src="icons/pen_white.svg" alt="pen" class="service__item_img-active">
                    <p class="service__item_text">ППРФ 2216</p>
                    <div class="service__content">
                        <div class="service__content_wrapper">
                            <div class="service__content_logo">
                                <h3 class="service__content_title">ППРФ 2216</h3>
                                <img src="icons/pen_red.svg" alt="pen" class="serice__content_img">
                            </div>
                            <p class="service__content_text">Использование компьютерных и телекоммуникационных технологий для обмена медицинской информацией. Является одним из наиболее быстро растущих сегментов здравоохранения в мире.</p>
                            <p class="service__content_text">Телемедицина – это новый способ в сложившейся эпидемической ситуации взаимодействия врача с пациентом. Он представляет дистанционное оказание медицинских услуг.</p>
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
                    </div>
                </div>
           </div>
           <div class="service__wrapper">
                <div class="service__item">
                    <img src="icons/pen.svg" alt="pen" class="service__item_img">
                    <img src="icons/pen_white.svg" alt="pen" class="service__item_img-active">
                    <p class="service__item_text">Трекеры</p>
                    <div class="service__content">
                        <div class="service__content_wrapper">
                            <div class="service__content_logo">
                                <h3 class="service__content_title">трекеры</h3>
                                <img src="icons/pen_red.svg" alt="pen" class="serice__content_img">
                            </div>
                            <p class="service__content_text">Использование компьютерных и телекоммуникационных технологий для обмена медицинской информацией. Является одним из наиболее быстро растущих сегментов здравоохранения в мире.</p>
                            <p class="service__content_text">Телемедицина – это новый способ в сложившейся эпидемической ситуации взаимодействия врача с пациентом. Он представляет дистанционное оказание медицинских услуг.</p>
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
                    </div>
                </div>
                <div class="service__item">
                    <img src="icons/pen.svg" alt="pen" class="service__item_img">
                    <img src="icons/pen_white.svg" alt="pen" class="service__item_img-active">
                    <p class="service__item_text">Обращения в результате ДТП</p>
                    <div class="service__content">
                        <div class="service__content_wrapper">
                            <div class="service__content_logo">
                                <h3 class="service__content_title">Обращения в результате ДТП</h3>
                                <img src="icons/pen_red.svg" alt="pen" class="serice__content_img">
                            </div>
                            <p class="service__content_text">Использование компьютерных и телекоммуникационных технологий для обмена медицинской информацией. Является одним из наиболее быстро растущих сегментов здравоохранения в мире.</p>
                            <p class="service__content_text">Телемедицина – это новый способ в сложившейся эпидемической ситуации взаимодействия врача с пациентом. Он представляет дистанционное оказание медицинских услуг.</p>
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
                    </div>
                </div>
                <div class="service__item">
                    <img src="icons/pen.svg" alt="pen" class="service__item_img">
                    <img src="icons/pen_white.svg" alt="pen" class="service__item_img-active">
                    <p class="service__item_text">Мониторинг транспорта</p>
                    <div class="service__content">
                        <div class="service__content_wrapper">
                            <div class="service__content_logo">
                                <h3 class="service__content_title">Мониторинг транспорта</h3>
                                <img src="icons/pen_red.svg" alt="pen" class="serice__content_img">
                            </div>
                            <p class="service__content_text">Использование компьютерных и телекоммуникационных технологий для обмена медицинской информацией. Является одним из наиболее быстро растущих сегментов здравоохранения в мире.</p>
                            <p class="service__content_text">Телемедицина – это новый способ в сложившейся эпидемической ситуации взаимодействия врача с пациентом. Он представляет дистанционное оказание медицинских услуг.</p>
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
                    </div>
                </div>
           </div>
        </div>
    </section>
    <section class="section news">
        <img src="icons/section_logo.svg" alt="logo" class="section__logo">
        <h2 class="news__title">Новости</h2>
        <div class="news__wrapper">
            <div class="news__item">
                <p class="news__data">28.07.2021</p>
                <img src="img/news.jpg" alt="news" class="news__prev">
                <h3 class="news__name">Новости</h3>
                <hr class="news__line">
                <p class="news__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultricies ligula interdum porttitor. Vestibulum odio nunc, volutpat sed feugiat nec, sagittis imperdiet tortor.</p>
            </div>
            <div class="news__item">
                <p class="news__data">28.07.2021</p>
                <img src="img/news.jpg" alt="news" class="news__prev">
                <h3 class="news__name">Новости</h3>
                <hr class="news__line">
                <p class="news__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultricies ligula interdum porttitor. Vestibulum odio nunc, volutpat sed feugiat nec, sagittis imperdiet tortor.</p>
            </div>
            <div class="news__item">
                <p class="news__data">28.07.2021</p>
                <img src="img/news.jpg" alt="news" class="news__prev">
                <h3 class="news__name">Новости</h3>
                <hr class="news__line">
                <p class="news__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultricies ligula interdum porttitor. Vestibulum odio nunc, volutpat sed feugiat nec, sagittis imperdiet tortor.</p>
            </div>
            <div class="news__item">
                <p class="news__data">28.07.2021</p>
                <img src="img/news.jpg" alt="news" class="news__prev">
                <h3 class="news__name">Новости</h3>
                <hr class="news__line">
                <p class="news__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultricies ligula interdum porttitor. Vestibulum odio nunc, volutpat sed feugiat nec, sagittis imperdiet tortor.</p>
            </div>
            <div class="news__item">
                <p class="news__data">28.07.2021</p>
                <img src="img/news.jpg" alt="news" class="news__prev">
                <h3 class="news__name">Новости</h3>
                <hr class="news__line">
                <p class="news__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultricies ligula interdum porttitor. Vestibulum odio nunc, volutpat sed feugiat nec, sagittis imperdiet tortor.</p>
            </div>
            <div class="news__item">
                <p class="news__data">28.07.2021</p>
                <img src="img/news.jpg" alt="news" class="news__prev">
                <h3 class="news__name">Новости</h3>
                <hr class="news__line">
                <p class="news__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultricies ligula interdum porttitor. Vestibulum odio nunc, volutpat sed feugiat nec, sagittis imperdiet tortor.</p>
            </div>
        </div>
    </section>
    <section class="section news blue">
        <img src="icons/section_logo_blue.svg" alt="logo" class="section__logo">
        <h2 class="news__title">Отзывы</h2>
        <div class="direct__wrapper">
            <div class="direct__item">
                <img src="icons/direct.jpg" alt="news" class="direct__prev">
                <p class="direct__upname">Директор</p>
                <h3 class="direct__name">Александр Валерьевич</h3>
                <p class="direct__data">28 июля 2020</p>
                <p class="direct__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultricies ligula interdum porttitor. Vestibulum odio nunc, volutpat sed feugiat nec, sagittis imperdiet tortor.</p>
            </div>
            <div class="direct__item">
                <img src="icons/direct.jpg" alt="news" class="direct__prev">
                <p class="direct__upname">Директор</p>
                <h3 class="direct__name">Александр Валерьевич</h3>
                <p class="direct__data">28 июля 2020</p>
                <p class="direct__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultricies ligula interdum porttitor. Vestibulum odio nunc, volutpat sed feugiat nec, sagittis imperdiet tortor.</p>
                <div class="tab__doki">
                    <div class="tab__doki_img"><img src="icons/screp.svg" alt="file"></div>
                    <div class="direct__doki_text">Благодарственное письмо</div>
                </div>
            </div>
            <div class="direct__item">
                <img src="icons/direct.jpg" alt="news" class="direct__prev">
                <p class="direct__upname">Директор</p>
                <h3 class="direct__name">Александр Валерьевич</h3>
                <p class="direct__data">28 июля 2020</p>
                <p class="direct__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultricies ligula interdum porttitor. Vestibulum odio nunc, volutpat sed feugiat nec, sagittis imperdiet tortor.</p>
            </div>
            <div class="direct__item">
                <img src="icons/direct.jpg" alt="news" class="direct__prev">
                <p class="direct__upname">Директор</p>
                <h3 class="direct__name">Александр Валерьевич</h3>
                <p class="direct__data">28 июля 2020</p>
                <p class="direct__info">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique ultricies ligula interdum porttitor. Vestibulum odio nunc, volutpat sed feugiat nec, sagittis imperdiet tortor.</p>
                <div class="tab__doki direct__doki">
                    <div class="tab__doki_img"><img src="icons/screp.svg" alt="file"></div>
                    <div class="direct__doki_text">Благодарственное письмо</div>
                </div>
            </div>
        </div>
    </section>
    <section class="section form">
        <div class="form__content">
            <img src="icons/section_logo.svg" alt="logo" class="section__logo form__logo">
            <h2 class="form__title">Обратная связь</h2>
            <form method="post" class="form__main">
                <input type="hidden" name="project_name" value="teh">
                <input type="hidden" name="admin_email" value="admin@mail.com">
                <input type="hidden" name="form_subject" value="Form">

                <input type="text" class="form__input" placeholder="Имя">
                <input type="tel" class="form__input" placeholder="Телефон">
                <input type="email" class="form__input" placeholder="E-mail">
                <input type="text" class="form__input" placeholder="Сообщение">
                <div class="form__info">
                    <img src="icons/form.svg" alt="shild" class="form__img">
                    <div class="form__wrapper">
                        <p class="form__text">Настоящим подтверждаю, что я ознакомлен с условиями политики конфиденциальности на отправку данных.</p>
                        <a href="#" class="form__link">Подробнее</a>
                    </div>
                </div>
                <button class="form__btn">Отправить</button>
            </form>
        </div>
        <div class="form__bg">

        </div>
    </section>
    <!-- <pre>{{homepage}}</pre> -->
    <!-- <IndexHead :item="homepage.hero" /> -->
    <IndexAbout :data="homepage.about" />
    <IndexСontactСenter :data="homepage.contact_center" />
    <IndexNews :data="homepage.news" />
    <!-- <IndexLicenses :data="homepage.licenses" /> -->
    <IndexServices :data="homepage.services" />
    <IndexReviews :data="homepage.reviews" />
    <IndexFeedback />

    <Footer/>
  </div>
</template>

<script>
import page from '~/mixins/page';

import Header from '~/components/layouts/Header';
import Footer from '~/components/layouts/Footer';
// import IndexHead from '~/components/pages/index/Head';
import IndexAbout from '~/components/pages/index/About';
import IndexСontactСenter from '~/components/pages/index/СontactСenter';
// import IndexLicenses from '~/components/pages/index/Licenses';
import IndexNews from '~/components/pages/index/News';
import IndexServices from '~/components/pages/index/Services';
import IndexReviews from '~/components/pages/index/Reviews';
import IndexFeedback from '~/components/pages/index/Feedback';

export default {
  components: {
    Header,
    Footer,
    // IndexHead,
    IndexAbout,
    IndexСontactСenter,
    // IndexLicenses,
    IndexNews,
    IndexServices,
    IndexReviews,
    IndexFeedback,
  },

  mixins: [page],

  async asyncData({ $strapi, store }) {
    const homepage = await $strapi.find('homepage');
    store.commit('setHero', homepage.hero);
    return {
      homepage,
    };
  },

  head() {
    return {
      // bodyAttrs: { id: '' },
      script: [
        { src: '/js/jquery.fullPage.min.js' },
        { src: '/js/slick.js' },
      ],
    }
  },

};
</script>

<style lang="scss" scoped>
@import url('~/assets/styles/jquery.fullPage.scss');
</style>
