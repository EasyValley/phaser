const game = require('../game');
game.state.add('boot', function () {
    this.preload = function () {
        console.log('wwooo ss');
    }
});
