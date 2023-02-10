# podman build --no-cache -t test_moralis -f Dockerfile ../..
FROM node:18-bullseye AS development

WORKDIR /app

COPY ./package.json ./
RUN yarn


COPY ./src ./src
COPY ./tsconfig.json ./
COPY ./.env ./.env

RUN yarn build
RUN ls -la

FROM node:18-bullseye as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY --from=development app/.env ./.env

COPY --from=development app/dist ./dist
COPY --from=development app/node_modules ./node_modules

CMD ["node", "dist/index.js"]