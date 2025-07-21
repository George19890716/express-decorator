import { getValueByKeys } from './values';
import { KEY } from '../models'

export function getContainer(target): any {
  if (!Reflect.getMetadata(KEY.controllerContainer, target)) {
    const T = new target();

    const valueKeyMap = Reflect.getMetadata(KEY.valueKeyMap, target.prototype) ?? new Map<string, string>();

    valueKeyMap.forEach((key: string, propertyKey: string) => {
      if (key && propertyKey) {
        const value = getValueByKeys(key);
        Object.defineProperty(T, propertyKey, { value });
      }
    });
    Reflect.defineMetadata(KEY.controllerContainer, T, target);
  }

  const container = Reflect.getMetadata(KEY.controllerContainer, target);
  return container;
}