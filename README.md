# Prisma Node TS Express RESTAPI

### Overview

This Rest API is built with Node.js, Express, Prisma ORM, and PostgresQL. It provides CRUD functionality for a simple Users model.

### Installation

- Run `pnpm install` to install all the necessary dependencies
- Create a .env file in the root directory of the project and set the following environment variables:
  - `DATABASE_URL`: URL to your PostgresQL database
  - `PORT`: Port number for the server to run on
- Run `pnpm prisma migrate dev` to apply the database schema to your database
- Run `pnpm dev` to start the server

### TODO

#### Code

- Add Authentication & Authorization
- Add Test Coverage
- Async Workers
- Email Senders
- Attachment handling

#### Infra

- Dockerize
- CI Configuration
