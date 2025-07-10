# express-spring
Decorators toolkits to implement express application more easily

* [Installation](#Installation)
* [Features](#Features)
* [Quick Start](#Quick-Start)
* [Developers](#Developers)
* [License](#license)

## Installation 

This is a dependency based on Node.js.

Before installing, download and install Node.js. Node.js 18 or higher is required.

```bash
npm install express-spring
```

## Features

  Application Decorator
  * ExpressApplication

  Request Decorator
  * RestController
  * RequestMapping
  * GetMapping
  * PostMapping
  * PutMapping
  * PatchMapping
  * DeleteMapping

  Parameter Decorator
  * RequestBody
  * RequestHeader
  * RequestParam

## Quick Start
  Start a express application

  ```bash
  import { ExpressApplication } from 'express-spring';

  @ExpressApplication
  class Main {}
  ```

  Implement a post api for '/api/vi/example?id=1'

  ```bash
  import { RestController, RequestMapping, PostMapping, RequestBody, RequestParam, RequestHeader } from 'express-spring';

  @RestController
  @RequestMapping('/api/vi')
  export class Example {
    @PostMapping('/example')
    postExample(
      @RequestBody payload,    // get entire payload
      @RequestParam queries,   // get entire query { id: '1' }
      @RequestHeader headers,  // get entire headers
    ) {
      // return of this function will be response of the api
      return 'Here is the response of this Post Request!';
    }
  }
  ```

## Developers
  The original author of Express Spring is [Xu Ming](https://github.com/George19890716)

  List of all contributors
  * [Li Songjing](https://github.com/lisongjing)
  * [Yi Xuelian](https://github.com/June-elisa)

## License

  [MIT](LICENSE)