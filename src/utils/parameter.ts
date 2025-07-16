import { Request } from 'express';
import { KEY, ParameterInfo, ParameterType } from '../models';
import { getParametersMap } from './metadata';

const getParameter = function(request: Request, parameterInfo: ParameterInfo): any {
  const { body, query, headers, params } = request;
  const { type, name } = parameterInfo;
  switch(type) {
    case ParameterType.Body:
      return body ?? {};
    case ParameterType.Queries:
      return query ?? {};
    case ParameterType.Query:
      return query[name];
    case ParameterType.Headers:
      return headers;
    case ParameterType.Header:
      return headers[name];
    case ParameterType.PathVariables:
      return params ?? {};
    case ParameterType.PathVariable:
      return params[name];
    default: return {};
  }
}

export const getParameters = function (target: any, methodName: string | symbol, request: Request): any[] {
  const args: any[] = [];
  const parametersMap = getParametersMap(target.prototype, methodName);
  parametersMap.forEach((parameterInfo: ParameterInfo, index: number) => {
    args[index] = getParameter(request, parameterInfo);
    if (parameterInfo.required && args[index] === undefined) {
        throw {
          code: 400,
          message: `Parameter ${parameterInfo.name} is required!`
        };
    }
  }); 
  return args;
}