module.exports = ({ env }) => ({
  email: {
    settings: {
      // TODO: Настроить почту уже на хостинге
      defaultFrom: 'test@test.ts',
      defaultReplyTo: 'site@strapi.io',
      testAddress: 'j-tap@ya.ru',
    },
  },
});