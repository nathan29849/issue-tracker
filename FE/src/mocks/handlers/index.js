// src/mocks/handlers.js
import { rest } from 'msw';

const test = rest.get('/', (req, res, ctx) =>
  res(ctx.status(200), ctx.delay(0), ctx.json([])),
);

export const handlers = [];
