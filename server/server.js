'use strict';

const path = require('path');
const bunyan = require('bunyan');
const loopback = require('loopback');
const boot = require('loopback-boot');
const rootLogger = bunyan.createLogger({name: 'loopback-seed'});
const logger = require('loopback-component-logger')(rootLogger);
require('app-module-path').addPath(path.resolve(__dirname, '..'));

const app = module.exports = loopback();

app.start = () => {
    // start the web server
    return app.listen(() => {
        app.emit('started');

        const baseUrl = app.get('url').replace(/\/$/, '');
        console.log('Web server listening at: %s', baseUrl);

        if (app.get('loopback-component-explorer')) {
            const explorerPath = app.get('loopback-component-explorer').mountPath;
            console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
        }
    });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, (err) => {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module) {
        app.start();
    }
});
