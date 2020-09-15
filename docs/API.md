# @mrapi/api usage documentation

`@mrapi/api` serves as the API layer to directly provide services to the client, which can aggregate other `openapi/graphql` interfaces and operate the database through `prisma`.

## core

+ Log multi-terminal (file + terminal) output, automatic division

- [x] `standalone` mode
  - [x] Aggregate `graphql` interface
  - [x] Custom `graphql` interface
  - [x] Proxy `openapiy` interface
  - [x] Custom `openapi` interface
- [x] `combined` mode
  - [x] Expose the `dal` CRUD `graphql` interface
  - [x] Custom `graphql` interface (using `prisma` instance)
  - [ ] Expose the `dal` CRUD `openapi` interface
  - [x] Custom `openapi` interface (using `prisma` instance)

## install

```terminal
npm install @mrapi/api --save
```

## `standalone` mode 

+ Reference [api-basic](https://github.com/mrapi-js/mrapi/tree/docs-v1/examples/api-basic) project
+ **Note: Does not provide database operation capabilities**

### First, configure the basic configuration file

```javascript
// config/mrapi.config.js
exports.default = {
  api: {
    openapi: {
      dalBaseUrl: 'http://ip OR domains' // openapi代理目的地地址
    },
    graphql: {
      sources: [
        {
          name: 'graphqlSourceName',
          endpoint: 'http://ip OR domains', // 源graphql服务地址
          prefix: 'prefix_', // graphql operationName前缀
          snapshot: false // 请求graphql快照
        }
      ]
    }
  }
}
```

**Note: For other configuration items, please refer to [API configuration](https://mrapi-js.github.io/docs/Configuration/API.html)**

### Second, start the API service

```javascript
import Api, { log } from '@mrapi/api'

(async function () {
  const api = new Api()
  await api.start()
})().catch((err) => {
  log.error(err)
})
```

### Third, Access service

```terminal
Server listening at http://127.0.0.1:1358
# access playground http://127.0.0.1:1358/playground
# access graphql http://127.0.0.1:1358/graphql/default
# access custom openapi http://127.0.0.1:1358/api/xx
# For other routes, please check the terminal print Routes Tree
```

## `combined` mode

+ Reference [api-combine](https://github.com/mrapi-js/mrapi/tree/docs-v1/examples/api-combine) project
+ **Note: `Graphql-mesh` and `openapi proxy` capabilities are not provided**
+ Carry tenant information through `headers['mrapi-pmt']`, and change the key value through `tenantIdentity` in `mrapi.config.js`
+ **Select the schema** `graphql` interface and use `/graphql/:schemaName` to determine which schema corresponds to the `prismaClient`, and the `/graphql` prefix can be modified through `api.graphql.path`
+ **Select the schema** `openapi` interface and use `headers['mrapi-schema']` to determine which schema corresponds to the `prismaClient`. You can change the key value through `api.schemaIdentity` in `mrapi.config.js`

### First, Configure the basic configuration file

```javascript
// config/mrapi.config.js
exports.default = {
  managementUrl: 'mysql://root:123456@127.0.0.1/management',
  api: {
    schemaNames: ['one'], // prisma schema names
    server: {
      type: 'combined',
    },
  }
}
```

**Note: For other configuration items, please refer to [API configuration](https://mrapi-js.github.io/docs/Configuration/API.html)**

### Second, Configuration before startup

Please refer to the [DAL document](https://mrapi-js.github.io/docs/Configuration/DAL.html) and configure `prisma` related dependent files and configuration items, otherwise it may cause startup failure

### Third, Start API service

```javascript
import Api, { log } from '@mrapi/api'

(async function () {
  const api = new Api()
  await api.start()
})().catch((err) => {
  log.error(err)
})
```

### Fourth, Access service

```terminal
Server listening at http://127.0.0.1:1358
# access playground http://127.0.0.1:1358/playground
# access graphql http://127.0.0.1:1358/graphql/default
# access custom openapi http://127.0.0.1:1358/api/xx
# For other routes, please check the terminal print Routes Tree
```

### Tips

+ For custom extensions of `Fastify Server` instances, you can add them by calling `api.server.xxx`after the `@mrapi/api` instance is created and before `api.start()`
+ `@mrapi/api` exposes the `log` instance, which can be used in the service (refer to `pino`). The log will be printed on the terminal and recorded on the disk at the same time, and provide the ability to split
+ Customize the openapi interface in the `${root}/src/openap`i directory, please refer to the `fastify route` documentation
+ Customize the graphql interface in the `${root}/src/graphql` directory, please refer to `graphql nexus` related documents
+ In `standalone` mode, `execute` method is injected into the context of custom `graphql/openapi handler`, which can be used to call aggregate `graphql` service

