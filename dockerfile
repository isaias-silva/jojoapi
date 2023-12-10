FROM node:latest




ENV TZ=America/Sao_Paulo

WORKDIR /app


COPY package.json .
COPY yarn.lock .
COPY tsconfig.json ./

COPY .env ./

RUN yarn install

COPY . .

RUN yarn run build

CMD yarn start
