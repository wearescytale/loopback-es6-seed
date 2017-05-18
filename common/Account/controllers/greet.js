const logger = require('loopback-component-logger')('Account Greet Method');

module.exports = (Account) => {
    Account.greet = () => {
        Account.services.hiAll();
        Account.services.bye();
        logger.info('Test debug message');
        return Promise.resolve('Hi');
    }

    Account.remoteMethod('greet', {
        returns: { arg: 'message', type: 'string' }
    });
};
