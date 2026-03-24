# Basis API

A REST API built with Node.js, Express, and TypeScript. Serves product data to the Basis Store.

## Stack

- Node.js
- Express
- TypeScript
- ts-node + nodemon (development)

## Getting started

From the monorepo root:

```bash
pnpm --filter @basis/api dev
```

Runs at http://localhost:4000.

## Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/health` | Health check |
| GET | `/api/products` | List all products |
| GET | `/api/products?category=X` | Filter products by category |
| GET | `/api/products/:id` | Get a single product by ID |
| GET | `/api/products/meta/categories` | List all unique categories |

## Structure

```
src/
├── routes/
│   └── products.ts   # Product endpoints
├── data/
│   └── products.json # Mock product data
└── index.ts          # Express app entry point
```

## Adding products

Edit `src/data/products.json`. The API reads this file at startup — no database needed for development.