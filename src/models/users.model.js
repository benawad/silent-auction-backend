'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
  
    username: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: true
    },
  
  
  }, {
    classMethods: {
      associate (models) { // eslint-disable-line no-unused-vars
        users.hasMany(models.auctions, { foreignKey: 'seller_id' })
        users.hasMany(models.auctions, { foreignKey: 'top_bidder_id' })
      }
    }
  });

  return users;
};
