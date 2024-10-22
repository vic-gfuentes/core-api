# builder
FROM node:20-slim AS builder

WORKDIR /app

COPY . .

RUN npm install -g pnpm@9.10.0 && pnpm install --frozen-lockfile
RUN pnpm build && pnpm prisma generate

# production
FROM node:20-slim AS production

WORKDIR /app

RUN apt-get update -y \
  && apt-get install --no-install-recommends -y openssl=3.0.14-1~deb12u2 \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

ENV NODE_ENV=production
ENV DATABASE_URL=${DATABASE_URL}
ENV JWT_SECRET=${JWT_SECRET}

CMD ["node", "dist/index.mjs"]
