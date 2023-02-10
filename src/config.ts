import * as dotenv from 'dotenv';
import { cleanEnv, num, str, bool } from 'envalid';

dotenv.config();

export default cleanEnv(process.env, {
  MONGO_USER: str({
    desc: 'Mongo user name'
  }),

  MONGO_ADMIN_USER: str({
    desc: 'Mongo user name'
  }),

  MONGO_ADMIN_PASSWORD: str({
    desc: 'Postgres password'
  }),

  MONGO_PASS: str({
    desc: 'Postgres password'
  }),

  MONGO_HOST: str({
    desc: 'Mongo host'
  }),

  MONGO_PORT: num({
    desc: 'Mongo port'
  }),

  MONGO_DB: str({
    desc: 'Mongo database'
  }),

  MORALIS_API_KEY: str({
    desc: 'Your moralis Api key (keep this secret)',
  }),

  PORT: num({
    desc: 'Default port wher parse-server will run on',
    default: 8080,
  }),

  HOST: str({
    desc: 'Default host wher parse-server will run on',
    default: 'moralis',
  }),

  CLOUD_PATH: str({
    desc: 'Path to your cloud code',
    default: './dist/cloud/main.js',
  }),

  MASTER_KEY: str({
    desc: 'A secret key of your choice (keep this secret)',
  }),

  APPLICATION_ID: str({
    desc: 'An id for your app, can be anything you want',
    default: 'APPLICATION_ID',
  }),


  SERVER_URL: str({
    desc: 'Referenece to your server URL. Replace this when your app is hosted',
    devDefault: 'http://localhost:8080/server',
  }),

  USE_STREAMS: bool({
    desc: 'Enable streams sync',
    default: true,
  }),

  STREAMS_WEBHOOK_URL: str({
    desc: 'Webhook url for streams sync',
    default: '/streams-webhook',
  }),
});
