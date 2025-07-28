import { KEY } from '../models';

export function Wait(time: number) {
  return (target: any, methodName: string | symbol) => {
    Reflect.defineMetadata(KEY.requestTime, time, target, methodName);
  }
}