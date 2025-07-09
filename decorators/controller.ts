import { Request, Response } from 'express';
import { router  } from './utils';

export function RestController(target: any) {
  for (let methodName of Reflect.ownKeys(target?.prototype || {})) {
    const requestType = Reflect.getMetadata('requestType', target.prototype, methodName);
    const requestPath = Reflect.getMetadata('requestPath', target.prototype, methodName);

    if (requestType && requestPath) {
      const handler = target.prototype[methodName];
      const fullPath = requestPath;

      router[requestType](fullPath, (req: Request, res: Response) => {
        try {
          const response = handler();
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