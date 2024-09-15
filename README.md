# Prisma Node TS Express RESTAPI

### Overview

TypeScript REST API template built with Express, Prisma ORM. It includes features such as CRUD operations for users and test coverage for each component. Dockerization and CI/CD pipeline configurations are also available to ensure easy deployment and continuous integration.

### Stack

- Node.js
- Express
- Prisma ORM / PostgreSQL
- Zod
- Jest

### Installation

- Run `pnpm install` to install all the necessary dependencies
- Create a .env file in the root directory of the project and set the following environment variables:
  - `DATABASE_URL`: URL to your PostgresQL database
  - `PORT`: Port number for the server to run on
- Run `pnpm prisma generate` for you to have the prisma client
- Run `pnpm prisma migrate dev` to apply the database schema to your database
- Run `pnpm dev` to start the server

### TODO

#### Code

- Add Authentication & Authorization
- Async Workers
- Email Senders
- Attachment handling

#### Infra

- Dockerize
- CI Configuration
