var async = require('async');
var spawn = require('child_process').spawn;

module.exports = Player;

function Player(binary) {

    if (!(this instanceof Player)) return new Player(options);

    var queue = async.queue(function(task, next) {
        spawn(binary, [ task.file ], { stdio: 'inherit' }).on('close', next);
    })

    this.play = function(file) {
        if (!binary) return new Error("Cannot find an audio player.");
        queue.push({ file: file }, function(err) {
            if (err) console.error(err.message);
        })
    };
};