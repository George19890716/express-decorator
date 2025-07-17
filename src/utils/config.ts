import fse from 'fs-extra';
import { getFileInfo } from './file';

export function getConfiguration(configPath: string) {
  try {
    const { exist, empty, directory } = getFileInfo(configPath);
    if (exist && !empty && !directory) {
      const config = JSON.parse(fse.readFileSync(configPath, 'utf8'));
      let port = 404;
      if (checkValidPort(config?.Port ?? config?.port)) {
        port = config.Port;
      }
      return { port };
    } else {
      console.log('Failed to get port in configuration file, will use the 404 as default!');
      return { port: 404 };
    }
  } catch (e) {
    console.log('Failed to get configuration file!');
    throw e;
  }
}

export function checkValidPort(port: any): boolean {
  if (!port && port !== 0) return false;
  return typeof port === 'number' && !Number.isNaN(port) && port >=0 && port <= 50000;
}