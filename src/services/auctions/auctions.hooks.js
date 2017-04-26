'use strict';

const { authenticate } = require('feathers-authentication').hooks;
const auth = require('feathers-authentication-hooks');
const { debug, populate } = require('feathers-hooks-common');

const addTopBidder = require('../../hooks/add-top-bidder');

const placeBid = require('../../hooks/place-bid');

const userAuctionsSchema = {
  include: [
    {
      service: 'users',
      nameAs: 'seller',
      parentField: 'seller_id',
      childField: 'id'
    },
    {
      service: 'users',
      nameAs: 'top_bidder2',
      parentField: 'top_bidder_id',
      childField: 'id'
    },
  ]
};

const sequelizeRaw = require('../../hooks/sequelize-raw');

module.exports = {
  before: {
    all: [authenticate('jwt'), sequelizeRaw()],
    find: [],
    get: [],
    create: [
      auth.associateCurrentUser({
        idField: 'id',
        as: 'seller_id',
      }),
    ],
    update: [],
    patch: [addTopBidder(), placeBid()],
    remove: []
  },

  after: {
    all: [],
    find: [
      debug('hello'),
      populate({ schema: userAuctionsSchema })
    ],
    get: [
      populate({ schema: userAuctionsSchema })
    ],
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
