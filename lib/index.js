// Load modules

var Useragent = require('useragent');
var UseragentFeatures = require('useragent/features');


// Declare internals

var internals = {};


exports.register = function (plugin, options, next) {

    plugin.ext('onRequest', internals.onRequest);

    next();
};


exports.register.attributes = {
    pkg: require('../package.json')
};


internals.onRequest = function (request, reply) {

    var agent = Useragent.lookup(request.raw.req.headers['user-agent']);
    request.plugins.scooter = agent;
    reply();
};
