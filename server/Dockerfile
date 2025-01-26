FROM alpine:3.21

RUN apk add nodejs npm

WORKDIR /usr/src/server

COPY ./package*.json .

RUN npm install
# set env manually. (To be changed)

ENV DATABASE_HOST='172.18.0.3'
ENV DATABASE_PORT=5432
ENV DATABASE_USER="dev"
ENV DATABASE_PASSWORD="dev"
ENV DATABASE_NAME="notes"
COPY ./dist .

EXPOSE 3000

CMD node index.js
