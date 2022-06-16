// src/mocks/handlers.js
import { rest } from 'msw';

const getUser = rest.get('/user', (req, res, ctx) =>
  res(
    ctx.status(200),
    ctx.delay(2000),
    ctx.json({
      id: 120123123,
      username: 'sadjfaioij',
      password: 'dpofoqpwjer',
    }),
  ),
);

export const handlers = [getUser];
