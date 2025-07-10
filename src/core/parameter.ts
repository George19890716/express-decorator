import { ParameterType } from '../models';
import { getParametersMap, setParametersMap } from '../utils';

export function RequestBody(
  target: any, 
  methodName: string | symbol, 
  paramIndex: number,
): any {
  const parametersMap = getParametersMap(target, methodName);
  parametersMap.set(paramIndex, { name: '', type: ParameterType.Body, required: false });
  setParametersMap(target, methodName, parametersMap);
}

export function RequestParam(
  param1: any, 
  param2: string | symbol | { required: boolean } = { required: true }, 
  param3: number = 0,
): any {
  if (typeof param1 === 'string') {
    const name = param1;
    let required = true;
    if (typeof param2 === 'object') {
      required = param2.required;
    }
    return (target: any, methodName: string | symbol, paramIndex: number) => {
      const parametersMap = getParametersMap(target, methodName);
      parametersMap.set(paramIndex, { name, type: ParameterType.Query, required });
      setParametersMap(target, methodName, parametersMap);
    };
  } else {
    const target = param1, paramIndex = param3;
    const methodName = typeof param2 === 'object' ? String(param2) : param2;
    const parametersMap = getParametersMap(target, methodName);
    parametersMap.set(paramIndex, { name: '', type: ParameterType.Queries, required: false });
    setParametersMap(target, methodName, parametersMap);
  }
}

export function RequestHeader(
  param1: any, 
  param2: string | symbol | { required: boolean } = { required: true }, 
  param3: number = 0,
): any {
  if (typeof param1 === 'string') {
    const name = param1;
    let required = true;
    if (typeof param2 === 'object') {
      required = param2.required;
    }
    return (target: any, methodName: string | symbol, paramIndex: number) => {
      const parametersMap = getParametersMap(target, methodName);
      parametersMap.set(paramIndex, { name, type: ParameterType.Header, required });
      setParametersMap(target, methodName, parametersMap);
    };
  }  else {
    const target = param1, paramIndex = param3;
    const methodName = typeof param2 === 'object' ? String(param2) : param2;
    const parametersMap = getParametersMap(target, methodName);
    parametersMap.set(paramIndex, { name: '', type: ParameterType.Headers, required: false });
    setParametersMap(target, methodName, parametersMap);
  }
}