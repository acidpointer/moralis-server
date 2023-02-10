//@ts-ignore
import ParseDashboard from 'parse-dashboard';
import config from './config';
//`http://${config.HOST}:${config.PORT}/${config.SERVER_URL}`
export const parseDashboard = new ParseDashboard(
  {
    apps: [
      {
        appId: config.APPLICATION_ID,
        masterKey: config.MASTER_KEY,
        serverURL: `http://localhost:8080/server`,
        appName: 'SELFHOSTED MORALIS',
      },
    ],
    users: [
      {
        user: "test",
        pass: "test",
        apps: [{ appId: config.APPLICATION_ID }]
      },
    ],
  },
  { allowInsecureHTTP: true }
);