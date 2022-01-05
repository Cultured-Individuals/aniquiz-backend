const path = require('path');

if (process.env.IS_PRODUCTION) {
  module.exports = ({ env }) => ({
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'jmp.blue'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'aniquiz'),
        user: env('DATABASE_USERNAME', 'aniquiz'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: env.bool('DATABASE_SSL', false),
        schema: env("DATABASE_SCHEMA", "aniquiz"),
      },
    },
  });
} else {
    module.exports = ({ env }) => ({
      connection: {
          client: 'sqlite',
          connection: {
            filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
          },
          useNullAsDefault: true,
        }
    })
}

