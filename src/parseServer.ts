// @ts-ignore
import ParseServer from 'parse-server';
import config from './config';
import MoralisEthAdapter from './auth/MoralisEthAdapter';

export const parseServer = new ParseServer({
  databaseURI: 
    `mongodb://${config.MONGO_ADMIN_USER}:${config.MONGO_ADMIN_PASSWORD}@${config.MONGO_HOST}:${config.MONGO_PORT}`,
  cloud: config.CLOUD_PATH,
  serverURL: config.SERVER_URL,
  publicServerURL: config.SERVER_URL,
  appId: config.APPLICATION_ID,
  masterKey: config.MASTER_KEY,
  auth: {
    moralisEth: {
      module: MoralisEthAdapter,
    },
  },
});
