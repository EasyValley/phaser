const game = require('./game');
const boot = require('./state/boot');
boot();
game.state.start('boot');