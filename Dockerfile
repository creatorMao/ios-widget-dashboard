FROM node:alpine

RUN mkdir -p /code/dashboard

COPY . /code/dashboard

WORKDIR /code/dashboard

RUN npm ci --legacy-peer-deps

EXPOSE 8080

CMD [ "npm", "run", "serve" ]