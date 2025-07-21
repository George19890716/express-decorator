import fse from 'fs-extra';
import path from 'path';
import { getFileInfo } from './file';

function Values() {}

export function initialValues(valuesPath: string) {
  const values = getValues(valuesPath);
  Reflect.defineMetadata('Values', values, Values);
}

export function getValues(valuesPath: string) {
  const data = {};
  if (!fse.existsSync(valuesPath)) return data;
  
  const files = fse.readdirSync(valuesPath);

  for (let file of files) {
    const filePath = path.join(valuesPath, file);
    try {
      const fileInfo = getFileInfo(filePath);
      if (!fileInfo.directory && path.extname(file) === '.json') {
        const key = path.basename(file, '.json');
        data[key] = !fileInfo.empty ? fse.readJsonSync(filePath) : null;
      } else if (fileInfo.directory && fse.readdirSync(filePath)?.length > 0) {
        data[file] = getValues(filePath);
      }
    } catch(e) {
      console.error(`Error in reading file: ${filePath}`, e);
    }
  }
  return data;
}

export function getValueByKeys(keys: string) {
  if (!keys) return null;
  let values = Reflect.getMetadata('Values', Values) || {};
  keys.split('.').forEach(key => {
    values = values[key] ?? null;
  });
  return values;
}

