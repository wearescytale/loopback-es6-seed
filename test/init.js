'use strict';

process.env.NODE_ENV = 'test';

const path = require('path');
const mocha = require('mocha');
const mochaMongoose = require('mocha-mongoose');
require('app-module-path').addPath(path.resolve(__dirname, '..'));

process.chdir(path.join(__dirname, '/..'));

process.on('unhandledRejection', (err, p) => {
    // do nothing
});

// Mongo
const mongoConfig = require('../server/datasources.test');
const mongo = mochaMongoose(
    'mongodb://' +
    mongoConfig.mongo.host +
    ':' +
    mongoConfig.mongo.port +
    '/' +
    mongoConfig.mongo.database,
    {}
);

// Server setup
before((done) => {
    const app = require('server/server');
    app.start();

    return app.once('booted', () => {
        global.loopback = app;
        done();
    });
});
