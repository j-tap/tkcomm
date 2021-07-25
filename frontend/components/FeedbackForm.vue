<template>
  <form @submit.prevent="sendForm">
    <Input v-model="form.name" label="Имя" />
    <Input v-model="form.phone" label="Телефон" type="tel" />
    <Input v-model="form.email" label="E-mail" type="email" />
    <Textarea v-model="form.message" label="Сообщение" />
    <div>
      <button class="button" type="submit">Отправить</button>
    </div>
    <div v-if="error">{{ error }}</div>
  </form>
</template>

<script>
import fetchData from '~/mixins/fetch'

import Input from '~/components/form/Input';
import Textarea from '~/components/form/Textarea';

export default {
  components: {
    Input,
    Textarea,
  },

  mixins: [
    fetchData,
  ],

  data() {
    return {
      error: null,
      form: {
        name: null,
        phone: null,
        email: null,
        message: null,
      },
    }
  },

  methods: {
    async sendForm() {
      const sitename = process.server;
      const html = `<h1>Новое обращение на сайте ${sitename}</h1>
        <p>Имя: ${this.form.name}.<p>
        <p>Телефон: ${this.form.phone}.<p>
        <p>E-mail: <%= ${this.form.email} %>.<p>
        <p>Сообщение: </p>
        <p>${this.form.message}<p>`;

      try {
        // TODO: Настроить почту уже на хостинге
        const result = await this.fetchData('/email', 'post', this.form);
        // await this.$strapi.plugins['email'].services.email.send({
        //   to: 'j-tap@ya.ru',
        //   from: `site@${sitename}`,
        //   replyTo: `${this.form.email}`,
        //   subject: `Новое обращение на сайте ${sitename} от <%= ${this.form.email} %>`,
        //   html,
        //   // text: 'Hello world!',
        //   // cc: 'helenedarroze@strapi.io',
        //   // bcc: 'ghislainearabian@strapi.io',
        // });
        if (result) {
          this.error = null;
        }
      } catch (error) {
        this.error = error;
      }
    },
  }
}
</script>

<style lang="scss" scoped></style>
