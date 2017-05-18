'use strict';

var configs = require('./configs.js');

var MONGO_ADDR = configs.MONGO_HOST;
var MONGO_PORT = configs.MONGO_PORT;
var MONGO_DB = configs.DB;

module.exports = {
    mongo: {
        host: MONGO_ADDR,
        port: MONGO_PORT,
        database: MONGO_DB,
        connector: 'mongodb',
        name: 'mongo',
    },
};
