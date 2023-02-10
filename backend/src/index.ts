import Moralis from 'moralis';

import Fastify, { FastifyInstance } from 'fastify'
import FastifyExpress from '@fastify/express';
import cors from '@fastify/cors'

// @ts-ignore
import ParseServer from 'parse-server';
import { streamsSync } from '@moralisweb3/parse-server';


import { parseServer } from './parseServer';
import { parseDashboard } from './dashboard';
import config from './config';



const boostrap = async (): Promise<FastifyInstance> => {
  const fastify = Fastify({
    logger: {
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss',
          ignore: 'pid,hostname',
        },
      },
    },
  });

  await fastify.register(cors, {});
  await fastify.register(FastifyExpress);

  fastify.express.disabled('x-powered-by');


  fastify.use(streamsSync(parseServer, {
    apiKey: config.MORALIS_API_KEY,
    webhookUrl: '/streams-webhook',
  }));


  Moralis.start({
    apiKey: config.MORALIS_API_KEY,
    logLevel: 'verbose',
  });

  fastify.use('/dashboard', parseDashboard);
  fastify.use('/parse', parseServer.app);

  return fastify;
}

const main = async () => {
  const app = await boostrap();

  app.log.info('Server bootstraping done!');

  ParseServer.createLiveQueryServer(app.server);

  await app.listen({ port: config.PORT, host: config.HOST });
};



main();



// export const app = express();

// Moralis.start({
//   apiKey: config.MORALIS_API_KEY,
// });

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(cors());

// app.use(
//   streamsSync(parseServer, {
//     apiKey: config.MORALIS_API_KEY,
//     webhookUrl: '/streams',
//   }),
// );

// app.use(`/server`, parseServer.app);
// app.use('/dashboard', parseDashboard);


// const httpServer = http.createServer(app);
// httpServer.listen(config.PORT, async () => {
//   if (config.USE_STREAMS) {
//     const url = await ngrok.connect(config.PORT);
//     // eslint-disable-next-line no-console
//     console.log(
//       `Moralis Server is running on port ${config.PORT} and stream webhook url ${url}${config.STREAMS_WEBHOOK_URL}`,
//     );
//   } else {
//     // eslint-disable-next-line no-console
//     console.log(`Moralis Server is running on port ${config.PORT}.`);
//   }
// });
// This will enable the Live Query real-time server
//ParseServer.createLiveQueryServer(httpServer);
