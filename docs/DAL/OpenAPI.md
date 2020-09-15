# @mrapi/dal OpenAPI



For details, visit oas swagger `/api/<schemaName>/swagger`



The following is only for special instructions



## API



### get -> /api/users



Corresponds to `prisma.findMany`



Get data list by parameter



#### where

+ Type: *`JSON string`*

Wrap all model fields in types so that the list can be filtered by any attribute.

**Note: See the corresponding Models in the document for details**

Such as: `id_in:${encode(1,2,3)},name:test`

#### orderBy

+ Type: `string`

Allow to sort the returned list by any attribute, separated by commas

Such as: `name:asc,id:desc`

#### skip

+ Type: `Int (>= 0)`

Specify the number of objects returned in the list that should be skipped

#### Take

+ Type: `Int (>= 1)`

Specify how many objects should be returned in the list(Seen from the beginning (+ve value) or end (-ve value) of the list or from the cursor position (if mentioned))

#### cursor

+ Type: `string (<key>:<value>)`

Specify the position of the list (the value usually specifies an id or another unique value), currently there can only be one attribute

Such as: `id:xxxx`

#### select(Optimizing)

Specify which attributes are included on the returned object

Such as: `id, name`

#### include(Optimizing)

Specify which relations should be quickly loaded on the returned object

Such as :`Post`

### post -> /api.users

Corresponds to `prisma.create`

Create a piece of data

### get -> /api/users/{id}

Corresponds to `prisma.findOne`

Query data by unique identification

### put -> /api/users/{id}

Corresponds to `prisma.update`

Modify data by unique identification

### delete -> /api/users/{id}

Corresponds to `prisma.delete`

Delete data by unique identification

