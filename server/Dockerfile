FROM alpine:3.21

RUN apk add nodejs npm

WORKDIR /usr/src/server

COPY ./package*.json .

RUN npm install
# set env manually. (To be changed)

COPY ./dist .

CMD node index.js
