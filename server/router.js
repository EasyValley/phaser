var Router = require('koa-router');


var router = new Router();

router.get('/', (ctx, next) => {
    // ctx.router available
    ctx.body = {
        name:'主枢纽'
    }
});

module.exports = router;