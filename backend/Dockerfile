# ====================================================================
# ESTÁGIO 1: BUILDER (Instalação e Geração do Prisma Client)
# ====================================================================
# Usamos o node:20 para melhor suporte a ES Modules e performance
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npx prisma generate


RUN npm prune --production

FROM node:20-alpine AS production

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app ./

ENV NODE_ENV production

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && npx prisma db seed && npm start"]