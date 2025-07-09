import { RequestType } from './models';

function getRequestDecorator(requestType: RequestType) {
  return function(requestPath: string) {
    return (target: any, methodName: string | symbol) => {
      Reflect.defineMetadata('requestType', requestType, target, methodName);
      Reflect.defineMetadata('requestPath', requestPath, target, methodName);
    }
  }
}

export const GetMapping = getRequestDecorator('get');
export const PostMapping = getRequestDecorator('post');
export const PutMapping = getRequestDecorator('put');
export const PatchMapping = getRequestDecorator('patch');
export const DeleteMapping = getRequestDecorator('delete');

export function RequestMapping(rootPath: string) {
  return (target: any) => {
    Reflect.defineMetadata('rootPath', rootPath, target);
  };
}