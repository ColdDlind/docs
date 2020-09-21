# CLI

[@mrapi/cli](https://github.com/mrapi-js/mrapi/tree/master/packages/cli)

Used to assist in the construction of standardized `mrapi `projects

## install

```
npm install @mrapi/cli --save-dev
```

## use

`@mrapi/cli` provides a cli interface for `mrapi` projects:

```terminal
npx mrapi -h
```

Help message will be printed:

```terminal
Usage: run [options] [command]

Options:
  -v, --version       output the version number
  -h, --help          display help for command

Commands:
  generate [options]  Generate prisma schema and nexus types
  help [command]      display help for command
```

## configuration

The following properties in `mrapiConfig` will be used:

```typescript
const { inputSchemaDir, schemaDir, outputDir, managementUrl } = this.mrapiConfig
```

Reference [mrapiConfig](https://mrapi-js.github.io/docs/Configuration/Common.html)

## generate

Used to initialize the multi-tenant management instance and generate the `prisma client`, `nexus type`, and `oas` codes required by the [DAL](https://mrapi-js.github.io/docs/Configuration/DAL.html).

This command roughly does the following things:

1. Clear redundant directories or files;
2. Generate a complete `schema.prisma` according to the target file;
3. Initialize the multi-tenant instance, and generate the corresponding prisma client according to schema.prisma;
4. Generate the corresponding `nexus CURD`;
5. Generate the corresponding `oas CURD`;

## Parameter options

```terminal
npx mrapi generate -h
```

Help message will be printed:

```terminal
Usage: run generate [options]

Generate prisma schema and nexus types

Options:
  --env <path>          env filePath (default: "config/.env")
  --name <name>         Schema client name. If the name is "management", Only generate management client.
  --cnt <options>       Generate CNT params. whiteList: disableQueries,disableMutations
  --m <options>         Generate models
  --em <options>        Exclude generate models
  --eqm <options>       Exclude Queries and Mutations
  -h, --help            display help for command
  --provider <options>  Datasource provider list: sqlite,mysql,postgresql.
```

#### --name

The file name corresponding to the `schema` configuration, uniquely identifies the `prisma client`.

+ Required
+ Type: `string`
+ Reference Value: `"management"` or `schema` configuration file name

Combine `mrapiConfig.inputSchemaDir` to find the `prisma schema` configuration entry, Generate `schema.prisma` export path with `mrapiConfig.schemaDir`, and generate `prisma client` address with `mrapiConfig.outputDir`.`

```typescript
const inputSchemaPath = path.join(cwd, inputSchemaDir, `${name}.prisma`)
const outputSchemaPath = path.join(cwd, schemaDir, `${name}.prisma`)
const outputPath = path.join(cwd, outputDir, name)
```

**Note: When the value is "management", only the `prisma client` for multi-tenant management is generated. Avoid the value equal to `"schema"`, because this value will be reserved for the multi-tenant management table configuration file.**

#### --cnt

Parameters to generate CURD 

+ Optional/Not required
+ Type: `string`(Comma separated)
+ Reference Value: `"disableQueries"` 、`"disableMutations"`

`"disableQueries"` means no queries are generated, and `"disableMutations"` means no mutations are generated.

#### --m

Which `models` in the configuration file are enabled

+ Optional/Not required
+ Type: `string`(Comma separated)
+ Undefined means all models are enabled

#### --em

Contrary to `--m` and mutually exclusive, means which `models` to ignore

+ Optional/Not required
+ Type: `string`(Comma separated)
+ Undefined means not to ignore any models

#### --eqm

Which `models` ignore both `queries` and `mutations`

+ Optional/Not required
+ Type: `string`(Comma separated)
+ Undefined means all models are enabled

## example

```terminal
# General usage, initialize the schema-xxx configuration file
npx mrapi generate --name schema-xxx

# OR

# Only initialize multi-tenant management (prisma/schema.prisma file is required)
npx mrapi generate --name management
```

