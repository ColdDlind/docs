# Deployment

## `Docker` deployment

mrapi project, it is recommended to use `Docker` deployment

`DockerFile` basic configuration

```dockerfile
FROM node:13

# 同步时区
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY . .

ENV ENVIROMENT=production

RUN yarn gen
RUN yarn build

CMD yarn start:prod
# EXPOSE 3001

# CMD ["yarn", "start"]
```

