# Koa Boilerplate

👏 A simple boilerplate for writing small Koa web services


## Getting Started

```zsh
$ git clone https://github.com/aandrewww/koa2-simple-ws-boiler your-project-name
$ cd your-project-name
$ rm -rf .git && git init
```

```zsh
$ npm install
$ npm start
```

## What's in the package?

* `npm run` scripts.
* [`axios`][axios] for Promise based requests.
* [`bluebird`][bluebird] featured promise library.
* [`eslint`][eslint] as JavaScript linter.
* [`prettier`][prettier] code formatting, configured to work with `eslint` out of the box.
* [`husky`][husky] for git hooks.
* [`koa-bodyparser`][koa-bodyparser] for parsing request bodies.
* [`koa-helmet`][koa-helmet] adds important security headers.
* [`koa-validate`][koa-validate] validate request params and format request params.
* [`koa2-cors`][cors] CORS middleware for cross-domain requests.
* [`koa-respond`][respond] for helper functions on the context.
* [`dotenv`][dotenv] for environment variable management.
* [`log4js`][log4js] for logging.
* [`lodash`][lodash] utility library.
* [`mongoose`][mongoose] as elegant mongodb object modeling for node.js.
* [`yargs`][yargs] helps you build interactive command line tools, by parsing arguments and generating an elegant user interface.

## `npm run` scripts

There are a few defined run scripts, here's a list of them with a description of what they do. To run them, simply execute `npm run <script name>` - e.g. `npm run lint`

* `start`: Used for simple start app.
* `test`: Runs tests (NOT SUPPORTED).
* `lint`: Lints

## Environment variables

Rename (or copy and rename) .env.default into .env
```
cp .env.default .env
```

The environment variables can be reached via dotenv package.
```
require('dotenv').config({ path: path.join(__dirname, '/.env') });
```
## Todo...

There're some features (updates) which will be included in this starter in the near future:

* [ ] Add route for '/'.
* [ ] Add directory structure into Readme.
* [ ] Add simple model.
* [ ] Add eslint description
* [ ] Add tests
* [ ] Add coverage for tests
* [ ] Add support clasterization
* [ ] Add koa-compress
* [ ] Add npm run ngrok (?)

# Author

* [Andrew Avdeev](https://andrewavdeev.com/)

# License

MIT.

[axios]: https://github.com/axios/axios
[bluebird]: https://github.com/petkaantonov/bluebird
[koa-router]: https://github.com/alexmingoia/koa-router
[koa-helmet]: https://github.com/venables/koa-helmet
[koa-validate]: https://github.com/RocksonZeta/koa-validate
[koa-bodyparser]: https://github.com/koajs/bodyparser
[eslint]: https://github.com/eslint/eslint
[prettier]: https://github.com/prettier/prettier
[husky]: https://github.com/typicode/husky
[cors]: https://github.com/koajs/cors
[respond]: https://github.com/jeffijoe/koa-respond
[dotenv]: https://github.com/motdotla/dotenv
[log4js]: https://github.com/log4js-node/log4js-node
[lodash]: https://github.com/lodash/lodash
[mongoose]: https://github.com/Automattic/mongoose
[yargs]: https://github.com/yargs/yargs
