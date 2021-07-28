module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        charset: 'utf8mb4_unicode_ci',
      },
      options: {
        useNullAsDefault: true,
        charset: 'utf8mb4_unicode_ci',
      },
    },
  },
});
