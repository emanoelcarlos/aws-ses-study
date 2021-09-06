FROM node:10.12-alpine

USER root

WORKDIR /app

COPY . .

EXPOSE 3001

ENTRYPOINT [ "npm", "run", "start" ]