const koa = require('koa');
const path = require('path');
const app = new koa();
const router = require('./router');


function start() {

    app.use(router.routes())
    app.use(router.allowedMethods());
    app.use(require('koa-static')(path.join(__dirname, '../dist/')));
    app.use(require('koa-static')(path.join(__dirname, '../lib/')));

    app.listen(8001, () => {
        console.log(`phaser 应用启动
        server 运作在8001端口
        `);
    });
}

exports.start = start;