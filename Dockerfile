FROM node:16.18.0-alpine AS base

RUN apk add --no-cache --virtual .build-deps python3 make g++

WORKDIR /srv
COPY . .

RUN yarn install --production

FROM base AS dev

RUN yarn install

RUN yarn run build:prod

FROM node:16.18.0-alpine AS prod

RUN apk add --no-cache --virtual vim bind-tools

COPY --from=base /srv/node_modules /srv/node_modules
COPY --from=base /srv/server.js /srv/server.js

WORKDIR /srv

EXPOSE 3069

CMD ["node", "server.js"]

