# GettingStart

Hello! Thank you for checking out Mrapi!
This document aims to be a gentle introduction to the framework and its features. It is an elementary preface with examples and links to other parts of the documentation.
Let's start!

## Prerequisites 

**Node:**

- NodeJS >= 10.x
- NPM >= 6.x

**Database:**

- MySQL >= 5.6
- PostgreSQL >= 10
- SQLite >= 3

## quickStart

### Frist step：create a mrapi project

As a first step, create a project directory and navigate into it:

```terminal
$  mkdir hello-mrapi
$  cd hello-mrapi
```

Next, run the following command: will automatically create a folder and install dependencies

```terminal
$  yarn create-mrapi-app my-project

# or
$  npx create-mrapi-app my-project

# or
$  pnpx create-mrapi-app my-project
```

And now, the project has  been generated!

### Second step: Modify the configuration file

View configuration：[config/mrapi.config.js](https://mrapi-js.github.io/docs/Configuration/Common.html)

### Third step: customize mrapi server

such as: 
```prisma
# one.prisma

model User {
  email String  @unique
  id    Int     @default(autoincrement()) @id
  name  String?
  Post  Post[]
}

model Post {
  authorId  Int?
  content   String?
  id        Int     @default(autoincrement()) @id
  published Boolean @default(false)
  title     String
  User      User?   @relation(fields: [authorId], references: [id])
}

```
### Fourth, Run the project
First compile the dependency file
```terminal
npx mrapi generate --name one
```
Run in developer environment
```termianl
npx ts-node-dev --respawn --transpile-only ./src/app.ts
```
