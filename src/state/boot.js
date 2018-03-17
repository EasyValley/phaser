const game = require('../game');


function boot() {
    game.state.add('boot', function () {
        this.preload = function () {
            console.log('wwooo ss');
        }
    });
}


module.exports = boot;