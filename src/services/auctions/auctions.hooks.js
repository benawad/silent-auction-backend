'use strict';

const { authenticate } = require('feathers-authentication').hooks;
const auth = require('feathers-authentication-hooks');
const addSellerUsername = require('../../hooks/add-seller-username');

const addTopBidder = require('../../hooks/add-top-bidder');

const placeBid = require('../../hooks/place-bid');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [
      auth.associateCurrentUser({
        idField: 'id',
        as: 'seller_id',
      }),
      addSellerUsername()
    ],
    update: [],
    patch: [addTopBidder(), placeBid()],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
