import { KEY } from '../models';

export function Value(key: string) {
  return function(target: any, propertyKey: string | symbol) {
    const valueKeyMap = Reflect.getMetadata(KEY.valueKeyMap, target) ?? new Map<string, string>();
    valueKeyMap.set(propertyKey.toString(), key);
    Reflect.defineMetadata(KEY.valueKeyMap, valueKeyMap, target);
  }
}