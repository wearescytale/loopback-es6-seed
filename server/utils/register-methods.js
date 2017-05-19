const path = require('path');
const glob = require('glob');
const camel = require('to-camel-case');

function appendController (Model) {
    return (filePath) => require(path.resolve(filePath))(Model);
}

function appendService (Model) {
    return (filePath) => (
        Model.services[
            camel(path.basename(filePath, path.extname(filePath)))
        ] = require(path.resolve(filePath))(Model)
    )
}

module.exports = (cb) => {
    return (Model) => {
        Model.services = {};

        glob.sync(
            path.join(path.dirname(module.parent.filename), './controllers/!(*.spec).js')
        )
            .forEach(appendController(Model))
        ;

        glob.sync(
            path.join(path.dirname(module.parent.filename), './services/!(*.spec).js')
        )
            .forEach(appendService(Model))
        ;

        cb && cb(Model);
    }
}
