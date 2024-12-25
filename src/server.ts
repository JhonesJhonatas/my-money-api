import express, { Express } from 'express';

import { routes } from '@shared/routes';

const app: Express = express();
const port = 3000;

app.use(express.json());

app.use(routes)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
