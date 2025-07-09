import express from 'express';
import cors from 'cors';

export function Server (target: any) {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.set('port', 404);

  app.listen(app.get('port'), () => {
    console.log('Express Capsule startup in ', app.get('port'));
  })
}