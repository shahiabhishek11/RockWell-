
FROM node:21
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node express.js
EXPOSE 9000
