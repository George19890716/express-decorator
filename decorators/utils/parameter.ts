import { Request } from 'express';
import { KEY, ParameterInfo, ParameterType } from '../models';
import { getParametersMap } from './metadata';

const getParameter = function(request: Request, parameterInfo: ParameterInfo): any {
  const { body, query, headers, params } = request;
  const { type, name } = parameterInfo;
  switch(type) {
    case ParameterType.Body:
      return body
    default: return {};
  }
}

export const getParameters = function (target: any, methodName: string | symbol, request: Request): any[] {
  const args: any[] = [];
  const parametersMap = getParametersMap(target.prototype, methodName);
  parametersMap.forEach((parameterInfo: ParameterInfo, index: number) => {
    args[index] = getParameter(request, parameterInfo);
  });
  return args;
}