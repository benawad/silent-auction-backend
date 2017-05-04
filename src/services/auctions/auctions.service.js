'use strict';

// Initializes the `auctions` service on path `/auctions`
const createService = require('feathers-sequelize');
const createModel = require('../../models/auctions.model');
const hooks = require('./auctions.hooks');
const filters = require('./auctions.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = { default: 1000, max: 1000 }

  const options = {
    name: 'auctions',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/auctions', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('auctions');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
