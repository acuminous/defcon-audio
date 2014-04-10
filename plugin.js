var path = require('path');
var _ = require('lodash');
var packageJson = require('./package.json');
var Criteria = require('./lib/Criteria');
var Player = require('./lib/Player');

module.exports.create = create;

function create(context, next) {

    var plugin = {
        version: packageJson.version,
        description: packageJson.description,
        repositoryUrl: packageJson.repository.url
    }

    var logger = context.logger;
    var config = context.config;
        var player = new Player(config.binary);

    context.defcon.on('event', function(event) {
        _.each(config.rules, function(rule) {
            if (new Criteria(rule.criteria).matches(event)) {
                var sample = rule.samples[_.random(rule.samples.length - 1)];
                player.play(path.join(__dirname, config.samplesDir, sample));
            }
        });
    });

    next(null, plugin);
}
