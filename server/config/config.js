require('dotenv').config();

module.exports = {
  development: {
    username: 'piyushxyz',
    password: 'Password@007',
    database: 'wellhire',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
  },
  test: {
    username: 'piyushxyz',
    password: 'Password@007',
    database: 'wellhire_test',
    host: 'localhost',
    dialect: 'postgres',
    port: 5432
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
};