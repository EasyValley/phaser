const game = require('../game');


function boot() {
    game.state.add('boot', function () {
        this.preload = function () {
            game.load.image('thorn', require('../img/thorn_lazur.png'));
        }
        this.create = function () {
            game.add.image(0, 0, 'thorn');
        }
    });
}


module.exports = boot;