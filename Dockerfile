FROM node:alpine

RUN mkdir -p /code/dashboard
WORKDIR /code/dashboard

ENV NODE_ENV production

COPY . /code/dashboard

RUN npm ci --legacy-peer-deps

EXPOSE 3000

CMD [ "npm", "run", "serve" ]