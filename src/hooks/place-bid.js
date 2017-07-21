'use strict';

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const errors = require('feathers-errors');

module.exports = function(options = {}) {
  // eslint-disable-line no-unused-vars
  return function(hook) {
    if (hook.data.update) {
      return hook;
    }
    if (parseFloat(hook.data.current_price) <= 0) {
      throw new errors.BadRequest('Invalid Parameters', {
        errors: { current_price: 'Has to be greater than or equal to 0' }
      });
    }

    return hook.app.service('auctions').get(hook.id).then(auction => {
      const price = parseFloat(auction.current_price);
      hook.data.current_price = price + parseFloat(hook.data.current_price);
      return hook;
    });
  };
};
