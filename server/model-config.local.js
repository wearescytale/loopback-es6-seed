const fs = require('fs');
const path = require('path');

const sourcePath = '../common/';
const fullPath = path.resolve(__dirname, sourcePath);

const folders = fs.readdirSync(fullPath)
    .filter(file => fs.lstatSync(path.join(fullPath, file)).isDirectory())
    .map(folder => path.join(sourcePath, folder))
;

module.exports = {
    _meta: {
        sources: [
            'loopback/common/models',
            'loopback/server/models',
            ...folders,
            './models'
        ]
    }
};
