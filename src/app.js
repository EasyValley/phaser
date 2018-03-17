const game = require('./game');
const boot = require('./state/boot');
const demo = require('./state/demo');
boot();
demo();

let arr = ['boot', 'demo'];

run(arr);



function run(arr) {
    game.state.start(arr[0]);
    arr.reverse();
    setTimeout(() => {
        run(arr);
    }, 100);
}
