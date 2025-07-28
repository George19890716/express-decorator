# express-spring
  Decorators toolkits to implement express application more easily

  * [Installation](#Installation)
  * [Features](#Features)
  * [Quick Start](#Quick-Start)
  * [Examples](#Examples)
  * [Application Configuration](#Application-Configuration)
  * [Developers](#Developers)
  * [License](#license)

## Installation 

  This is a dependency based on Node.js.

  Before installing, download and install Node.js. Node.js 18 or higher is required.

  ```bash
  npm install express-spring
  ```

## Features

  ### Application Decorator: Implement an Express Application
  * ExpressApplication

  ### Request Decorators: Implement Restful API
  * RestController
  * RequestMapping
  * GetMapping
  * PostMapping
  * PutMapping
  * PatchMapping
  * DeleteMapping

  ### Parameter Decorators: Extract Request Parameters in HTTP Request
  * RequestBody
  * RequestHeader
  * RequestParam
  * PathVariable (Supported in 1.1.0)

  ### Other Decorator: 
  * Value (Supported in 1.3.0, extract JSON format data within "values" folder)
  * Wait (Supported in 1.3.1, simulating API Delays)
  

## Quick Start
  Using [express-spring-generator](https://www.npmjs.com/package/express-spring-generator) to start express application with express-spring decorators.

  Install express-spring-generator globally:
  ```bash
  npm install -g express-spring-generator
  ```

  Create a new application:
  ```bash
  express-spring new example
  ```

  Input the number of port or using default value:
  ```bash
  ? Please input port of the application (404)
  ```

  Start application at http://localhost:404/:
  ```bash
  npm run startup
  ```

## Examples

  ### Examples in [GitHub](https://github.com/George19890716/express-spring-example)
  ```bash
  git clone git@github.com:George19890716/express-spring-example.git
  ```

  ### Implement an express application

  ```bash
  import { ExpressApplication } from 'express-spring';

  @ExpressApplication
  class Main {}
  ```

  ### Implement a post api for '/api/vi/example?id=1'

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

  Import all controller files
  ```bash
  import { ExpressApplication } from 'ts-decorators';
  import './controllers';

  @ExpressApplication
  class Main {} 
  ```

  ### Implement a delete api for http://localhost:404/parameter/1
  ```bash
  @RestController
  export class ParameterController {
    @DeleteMapping('/parameter/{id}')
    deleteParameter(@PathVariable('id') id) {
      return { id };
    }
  }
  ```

  ### Using Value decorator
  JSON file in "values/example/message.json"
  ```bash
  {
    "value": "This is an example of using Value decorator!"
  }
  ```

  Extract data from "values/example/message.json" in Rest Controller
  ```bash
  @RestController
  export class ValueController {
    @Value('example.message.value')
    private value: string; 

    @GetMapping('/value')
    getValue() {
      // "this.value" will be "This is an example of using Value decorator!"
      return this.value;
    }
  }
  ```

## Application Configuration
  Entrie configuration can be modified in application.config.json.

  ### Port
  Default value is 404, and the valid range is from 0 to 50,000 inclusive.

  ### ValuesFolder
  Default value is "values", to define the folder for storing JSON format data and extract them by "Value" decorator.

## Developers
  The original author of Express Spring is [Xu Ming](https://github.com/George19890716)

  List of all contributors
  * [Li Songjing](https://github.com/lisongjing)
  * [Yi Xuelian](https://github.com/June-elisa)

## License

  [MIT](LICENSE)