<template>
  <div>
    <Header/>
    <Main>
      <nuxt />
    </Main>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/layouts/Header';
import Main from '~/components/layouts/Main';
import Footer from '~/components/layouts/Footer';

export default {
  components: {
    Header,
    Main,
    Footer,
  },

  data() {
    return {};
  },
};
</script>
