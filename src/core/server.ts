import cors from 'cors';
import express from 'express';
import path from 'path';
import { getConfiguration, initialValues, router } from '../utils';

export function ExpressApplication(target: any) {
  try {
    const projectPath = process.cwd();
    const configPath = path.join(projectPath, 'application.config.json');
    const { port } = getConfiguration(configPath);

    const valuesPath = path.join(process.cwd(), 'values');
    initialValues(valuesPath);

    console.log('Data in "values" folder has been initialized');

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(router);

    app.set('port', port);

    app.listen(app.get('port'), () => {
      console.log('Mock Backend with Express Spring startup in ', app.get('port'));
    });
  } catch(e) {
    console.error('Failed to startup Mock Backend with Express Spring!');
    console.error(e?.message ?? e);
  }
}