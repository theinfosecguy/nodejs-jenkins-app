FROM node:latest

ARG PORT

ENV PORT=$PORT

WORKDIR /usr/src/app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD ["npm", "start"]

EXPOSE $PORT
