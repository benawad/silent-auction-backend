'use strict';

// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const auctions = sequelizeClient.define('auctions', {
    name: {
      type: Sequelize.STRING,
      allowNull: false
    },
    current_price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    expiration_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    seller_username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    top_bidder: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  }, {
    classMethods: {
      associate (models) { // eslint-disable-line no-unused-vars
        // Define associations here
        // See http://docs.sequelizejs.com/en/latest/docs/associations/
      }
    }
  });

  return auctions;
};
