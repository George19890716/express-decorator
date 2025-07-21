import { Request, Response } from 'express';
import { KEY } from '../models';
import { getContainer, getFullPath, getParameters, router } from '../utils';

export function RestController(target: any) {
  const rootPath = Reflect.getMetadata(KEY.rootPath, target) ?? '/';

  for (let methodName of Reflect.ownKeys(target?.prototype || {})) {
    const requestType = Reflect.getMetadata(KEY.requestType, target.prototype, methodName);
    const requestPath = Reflect.getMetadata(KEY.requestPath, target.prototype, methodName);

    if (requestType && requestPath) {
      const handler = target.prototype[methodName];
      const fullPath = getFullPath({ rootPath, requestPath });

      router[requestType](fullPath, (req: Request, res: Response) => {
        try {
          const container = getContainer(target);
          const args = getParameters(target, methodName, req);
          const response = handler.bind(container)(...args);
          res.send(response);
        } catch(e: any) {
            const code = e?.code || 500;
            const errorMessage = e?.message || 'Something wrong!';
            res.status(code).send({ errorMessage });
        }
      });
    }
  }
}