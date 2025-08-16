FROM node:23-alpine AS builder

WORKDIR /usr/src/client

COPY ./package*.json .

RUN npm ci 

COPY . .

RUN npm run build 

FROM node:23-alpine AS runner

WORKDIR /usr/src/client 

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs

RUN adduser --system --uid 1001 nextjs

COPY --from=builder /usr/src/client/public ./public  

COPY --from=builder --chown=nextjs:nodejs /usr/src/client/build/standalone ./

COPY --from=builder --chown=nextjs:nodejs /usr/src/client/build/static ./build/static  

USER nextjs 

EXPOSE 3000

CMD ["node", "server.js"]

