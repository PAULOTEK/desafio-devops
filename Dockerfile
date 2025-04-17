FROM public.ecr.aws/docker/library/node:23.10-slim AS builder

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y --no-install-recommends libcap2 libcap2-bin && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm audit fix

RUN npm prune --production

FROM public.ecr.aws/docker/library/23.10-slim

WORKDIR /usr/src/app

RUN rm -f /etc/security/capability.conf

RUN apt-get update -y && apt-get install -y openssl

COPY --from=builder --chown=node:node /usr/src/app/package.json ./
COPY --from=builder --chown=node:node /usr/src/app/node_modules ./node_modules
COPY --from=builder --chown=node:node /usr/src/app/build ./build
COPY --from=builder --chown=node:node /usr/src/app/prisma ./prisma

ENV NODE_ENV=production

RUN chown -R node:node /usr/src/app

USER node

EXPOSE 3013

CMD ["node", "build/main.js"]


