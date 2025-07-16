export type RequestType = 'get' | 'post' | 'put' | 'patch' | 'delete';

// Key for metadata
export enum KEY {
  rootPath = 'rootPath',
  requestType = 'requestType',
  requestPath = 'requestPath',
  parametersMap = 'parametersMap',
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

