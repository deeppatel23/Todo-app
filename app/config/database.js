require('dotenv').config();
const { Sequelize } = require('sequelize');

const db = process.env.DATABASE_NAME;
const user = process.env.DATABASE_USER;
const password = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(db, user, password, {
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
