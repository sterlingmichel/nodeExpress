# Project: Node-Rest API

### Introduction

  This Node.js based back-end application includes two versions of the API that parses the HTTP post data in the form of a JSON object. The back-end will extract the firstName, lastName, and the clientId. Afterward, a JSON object response will be sent back to the API client, with well-formatted field values.

### Node, TypeScript, Jest & TSC

  TSC is the main build tool to concatenate, compress or minify the source code for faster loading/execution time when the application will be deployed to production.


### Functional Programming, Revealing Module Pattern & IIFE

  The Application was mostly implemented using the modern typescruipt Programming standard.

### Important Commands

  ```
  npm start
  npm test (not completed)
  ```

### The API urls:

  ```
  http://localhost:8080/api/v1/parse
  http://localhost:8080/api/v2/parse
  ```

### The Input Data

  ```
  POST Data = { "data": "JOHN0000MICHAEL0009994567" }
  ```

### Expected Response Data

  1. The first API version, after the parsing or extraction, the zero strings are not removed or no formatting of data will be made. Please notice the trailing zeroes remain in the field values.

  ```
  Response Data = { statusCode: 200, data: { firstName: "JOHN0000", lastName: "MICHAEL000", clientId: "9994567" }}
  ``` 


  2. The second API version, after the parsing or extraction, it will take extra steps by removing the trailing zeroes and formatting the client-id by inserting a hyphen character after the third character. Please notice the trailing zeroes were trimmed to produce more intuitive values.

  ```
  Response Data =  { statusCode: 200, data: { firstName: "JOHN", lastName: "MICHAEL", clientId: "999-4567" } }
  ``` 
