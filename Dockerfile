FROM node:lts

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY . /app

RUN npm install

EXPOSE 8080 3000 80 443 25060

#CMD ["npm", "run", "serverStart"]
CMD ["npm", "start"]
