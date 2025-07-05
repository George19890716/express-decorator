import express from 'express';

export function Server (target: any) {
  const app = express();
  const cors = require('cors');

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cors());

  app.set('port', 404);

  app.listen(app.get('port'), () => {
    console.log('Express Capsule startup in ', app.get('port'));
  })
}