'use strict';

const assert = require('assert');
const app = require('../../src/app');

describe('\'auctions\' service', () => {
  it('registered the service', () => {
    const service = app.service('auctions');

    assert.ok(service, 'Registered the service');
  });
});
