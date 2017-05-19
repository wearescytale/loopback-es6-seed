'use strict';

var config = require('environment');

module.exports = {
    mongo: {
        host: config.MONGO_HOST,
        port: config.MONGO_PORT,
        database: config.MONGO_DB,
        connector: 'mongodb',
        name: 'mongo',
    },
};
