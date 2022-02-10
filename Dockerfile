FROM node:14.8.0-alpine AS todobackend

WORKDIR /back-end

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm", "start" ]