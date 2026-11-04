FROM node:24-alpine

WORKDIR /usr/src/app/

COPY --chown=node:node . .

USER node

RUN npm version