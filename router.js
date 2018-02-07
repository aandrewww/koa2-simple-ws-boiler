const Router = require('koa-router');

const user = require('./controllers/user');

const router = new Router();

router.use('/user', user.routes(), user.allowedMethods());

module.exports = router;
