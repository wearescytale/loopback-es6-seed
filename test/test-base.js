'use strict';

const chai = require('chai');
const sinon = require('sinon');
const serverConfig = require('../server/config.test');

chai.use(require('chai-http'));

const serverUrl = 'http://' + serverConfig.host + ':' + serverConfig.port + '/api';

global.chai = chai;
global.sinon = sinon;
global.should = chai.should();
global.expect = chai.expect;
global.assert = chai.assert;
global.request = chai.request(serverUrl);
global.fakers = require('./fakers');
