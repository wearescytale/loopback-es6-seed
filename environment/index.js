const fs = require('fs');
const path = require('path');
const logger = require('loopback-component-logger')('Environment Getter');

const env = (process.env.NODE_ENV || 'dev').toLowerCase();
const configPath = `./config.${env}.js`;

// Check if the configuration file exists
if (!fs.existsSync(path.resolve(__dirname, configPath))) {
    logger.error(new Error(`No environment configuration found for the current NODE_ENV=${env}`));
    return process.exit(1);
}

module.exports = require(configPath);
