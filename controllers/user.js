const logger = require('../configs/log')(__filename);
const Router = require('koa-router');

const router = new Router();

const validateUserCreds = require('../middlewares/validate-user-creds');

async function get(ctx) {
  const { method } = ctx.request;

  logger.info(method, '/');

  ctx.body = {};
}

async function post(ctx) {
  const { method } = ctx.request;
  const { email, pass } = ctx.state;

  logger.info(method, '/', `email: ${email}`, `pass: ${pass}`);

  ctx.body = {};
}

router.get('/', get).post('/', validateUserCreds, post);

module.exports = router;
