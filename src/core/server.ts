import express from 'express';
import cors from 'cors';
import { router } from '../utils';

export function ExpressApplication (target: any) {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());
  app.use(router);

  app.set('port', 404);

  app.listen(app.get('port'), () => {
    console.log('Mock Backend with Express Spring startup in ', app.get('port'));
  })
}