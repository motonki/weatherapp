FROM node:10

WORKDIR /usr/src/backend

COPY package*.json ./

RUN npm install
RUN npm install -g nodemon
RUN npm install debug

COPY . .

EXPOSE 9000

CMD ["node", "./src/index.js"]