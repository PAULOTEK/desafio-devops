# -------------------- Fase de Build --------------------
FROM public.ecr.aws/docker/library/node:23.10-slim AS builder

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl \
    ca-certificates \
    build-essential \
    python3 \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./
COPY prisma ./prisma

RUN npm install

# Gerar Prisma Client antes do build
RUN npx prisma generate

COPY . .

RUN npm run build


# -------------------- Fase Final --------------------
FROM public.ecr.aws/docker/library/node:23.10-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma


# Rodar como usuário seguro
USER node

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "dist/server.js"]
