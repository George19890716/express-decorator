import { ParameterType } from './models';
import { getParametersMap, setParametersMap } from './utils';

export function RequestBody(target: any, methodName: string | symbol, paramIndex: number) {
  const parametersMap = getParametersMap(target, methodName);
  parametersMap.set(paramIndex, { name: 'RequestBody', type: ParameterType.Body, required: false });
  setParametersMap(target, methodName, parametersMap);
}