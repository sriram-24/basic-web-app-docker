# Builder to build from source
FROM node:23-alpine AS builder

WORKDIR /usr/src/server

COPY ./package*.json .

RUN npm ci

COPY . .

RUN npm run build 

# Runner to run the compiled code in nodejs
FROM node:23-alpine

WORKDIR /usr/app/server

COPY --from=builder /usr/src/server/dist ./
COPY --from=builder /usr/src/server/node_modules ./node_modules

CMD [ "node","index.js" ]
