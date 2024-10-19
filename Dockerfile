FROM node:20-slim AS builder

WORKDIR /app

COPY . .

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

RUN pnpm build
RUN pnpm prisma generate

# Production
FROM node:20-slim AS production

WORKDIR /app

RUN apt-get update -y && apt-get install -y openssl

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

ENV NODE_ENV=production
ENV DATABASE_URL=${DATABASE_URL}
ENV JWT_SECRET=${JWT_SECRET}

CMD ["node", "dist/index.mjs"]
