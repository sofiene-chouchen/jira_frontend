FROM node:12

RUN npm install -g webpack -y
WORKDIR /client
COPY . ./client/
COPY package.json ./
RUN npm i

EXPOSE 8080
