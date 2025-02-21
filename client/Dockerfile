FROM alpine:3.21

RUN apk add nodejs npm

WORKDIR /usr/src/client

COPY ./package*.json .

RUN npm install

COPY . .

CMD [ "npm", "run", "dev"]


