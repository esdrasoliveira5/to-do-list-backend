require('dotenv/config');

const { HOST, PASSWORD_POSTGRES, DATABASE, DB_USERNAME, DB_PORT } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      useUTC: false,
    },
    timezone: '-03:00',
  },
  test: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      useUTC: false,
    },
    timezone: '-03:00',
  },
  production: {
    username: DB_USERNAME,
    password: PASSWORD_POSTGRES,
    database: DATABASE,
    host: HOST,
    port: DB_PORT,
    dialect: 'postgres',
    dialectOptions: {
      useUTC: false,
    },
    timezone: '-03:00',
  },
};