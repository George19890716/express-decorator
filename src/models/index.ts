export type RequestType = 'get' | 'post' | 'put' | 'patch' | 'delete';

// Key for metadata
export enum KEY {
  rootPath = 'rootPath',
  requestType = 'requestType',
  requestPath = 'requestPath',
  requestTime = 'requestTime',
  parametersMap = 'parametersMap',

  // For metadata in value decorator
  valueKeyMap = 'valueKeyMap', 
  controllerContainer = 'controllerContainer',
};

export enum ParameterType {
  Body,
  Query,
  Queries,
  Header,
  Headers,
  PathVariable,
  PathVariables,
}

export interface ParameterInfo {
  name: string,
  type: ParameterType,
  required: boolean,
} 

