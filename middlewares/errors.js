const logger = require('../configs/log')(__filename);

async function errors(ctx, next) {
  try {
    await next();
  } catch (err) {
    let message;

    ctx.status = err.status || 400;

    if (ctx.errors && ctx.errors.length) {
      logger.info('Errors:', JSON.stringify(ctx.errors));

      message = ctx.errors.reduce((errs, error) => Object.assign(errs, error), {});
    } else if (err.status && err.status < 500) {
      logger.info('Error:', JSON.stringify(err));

      message = err.message;
    } else {
      const data = JSON.stringify({
        url: ctx.request.url,
        body: ctx.request.body,
        query: ctx.request.query
      });

      logger.error('Server error:', JSON.stringify(err), 'data:', data);

      ctx.status = 500;

      message = err.message;
    }

    ctx.body = { message };
  }
}

module.exports = errors;
