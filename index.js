const path = require('path');

require('dotenv').config({ path: path.join(__dirname, '/.env') });

const Koa = require('koa');
const cors = require('koa2-cors');
const logger = require('./configs/log')(__filename);
// const Promise = require('bluebird');
const validate = require('koa-validate');
const bodyParser = require('koa-bodyparser');
const helmet = require('koa-helmet');

// Promise.promisifyAll(something);

const router = require('./router');

const DB = require('./lib/db');

const validateErrors = require('./helpers/validate');

const errors = require('./middlewares/errors');

const db = new DB({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  name: process.env.DB_NAME
});

const app = new Koa();

validate(app);

app.use(errors);
app.use(helmet());
app.use(cors({ origin: process.env.ALLOW_ORIGIN }));
app.use(bodyParser());
app.use(router.routes());

app.context.db = db;
app.context.validate = validateErrors;

app.listen(process.env.HTTP_PORT);
logger.info(`HTTP is listening on port: ${process.env.HTTP_PORT}`);

module.exports = app;
