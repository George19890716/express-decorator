import chalk from 'chalk';
import cors from 'cors';
import express from 'express';
import path from 'path';
import { getConfiguration, initialValues, router } from '../utils';

export function ExpressApplication(target: any) {
  try {
    const projectPath = process.cwd();
    const configPath = path.join(projectPath, 'application.config.json');
    const { port, valuesFolder } = getConfiguration(configPath);

    const valuesPath = path.join(process.cwd(), valuesFolder);
    initialValues(valuesPath);

    console.log(chalk.green(`Data in "${valuesFolder}" folder has been initialized!`));

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(router);

    app.set('port', port);

    app.listen(app.get('port'), () => {
      console.log(chalk.green('Mock Backend with Express Spring startup in ', app.get('port')));
    });
  } catch(e) {
    console.error(chalk.red('Failed to startup Mock Backend with Express Spring!'));
    console.error(chalk.red(e?.message ?? e));
  }
}