FROM node:10
WORKDIR /user/src/app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD [ "sh", "start.sh" ]
