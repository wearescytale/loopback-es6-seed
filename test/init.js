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

// Server setup
before((done) => {
    const app = require('server/server');

    // Mongo
    const config = require('environment');
    const mongo = mochaMongoose(
        'mongodb://' +
        config.MONGO_HOST +
        ':' +
        config.MONGO_PORT +
        '/' +
        config.MONGO_DB,
        {}
    );

    app.start();

    return app.once('booted', () => {
        global.loopback = app;
        done();
    });
});
