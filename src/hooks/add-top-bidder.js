'use strict';

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) {
    hook.data.top_bidder_id = hook.params.user.id;
    return Promise.resolve(hook);
  };
};
