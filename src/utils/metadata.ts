import { KEY, ParameterInfo } from '../models';

export function getParametersMap(target: any, methodName: string | symbol): Map<number, ParameterInfo> {
  return Reflect.getMetadata(KEY.parametersMap, target, methodName) ?? new Map<number, ParameterInfo>();
}

export function setParametersMap(target: any, methodName: string | symbol, parametersMap: Map<number, ParameterInfo>) {
  Reflect.defineMetadata(KEY.parametersMap, parametersMap, target, methodName);
}