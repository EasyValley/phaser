const game = require('../game');


function boot() {
    game.state.add('boot', function () {
        this.preload = function () {
            game.load.image('thorn', require('../img/thorn_lazur.png'));
            game.load.spritesheet('mummy', require('../img/mummy37x45.png'), 37, 45, 18);
        }
        var mg;
        this.create = function () {
            mg = game.add.image(0, 0, 'thorn');
            let mummy = game.add.sprite(200, 260, 'mummy', 5);
            mummy.inputEnabled = true;
            mummy.input.enableDrag();
            console.log(mummy);
            mummy.scale.set(4);
            let anim = mummy.animations.add('walk');
            anim.play(10, true);
            console.log('hhh')
        }

        this.update = function () {
            mg.x -= 1;
        }

    });
}


module.exports = boot;