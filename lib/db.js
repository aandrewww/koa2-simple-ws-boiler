const logger = require('../configs/log')(__filename);
const mongoose = require('mongoose');

mongoose.Promise = require('bluebird');

const MAX_RECONECTIONS = 5;

module.exports = class DB {
  constructor(config) {
    this.config = config;
    this.reconections = 0;

    this._db = mongoose.connection;

    this._db.on('connecting', () => logger.info('connecting to MongoDB...'));
    this._db.on('reconnected', () => logger.info('MongoDB reconnected!'));

    this._db.on('connected', () => {
      logger.info('MongoDB connected!');

      this.reconections = 0;
    });

    this._db.on('error', (error) => {
      logger.error(`Error in MongoDb connection: ${error}`);

      this.reconections += 1;

      if (this.reconections === MAX_RECONECTIONS) {
        process.exit(1);
      } else {
        mongoose.disconnect();
      }
    });

    this._db.on('disconnected', () => {
      logger.info('MongoDB disconnected!');

      this._connect();
    });

    this._connect();

    return this._db;
  }

  _connect() {
    mongoose.connect(`mongodb://${this.config.host}:${this.config.port}/${this.config.name}`, {
      useMongoClient: true
    });
  }
};
