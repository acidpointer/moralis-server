import express from 'express';
import { ProxyGenerator } from './proxyGenerator';
import { authRouter } from './auth/authRouter';
import config from '../config';

const evmProxyRouter = new ProxyGenerator('evm', {
  apiKey: config.MORALIS_API_KEY,
});

const solanaProxyRouter = new ProxyGenerator('solana', {
  apiKey: config.MORALIS_API_KEY,
});

export const apiRouter = express.Router();

apiRouter.use('/auth', authRouter);
apiRouter.use('/evm-api-proxy', evmProxyRouter.getRouter());
apiRouter.use('/solana-api-proxy', solanaProxyRouter.getRouter());