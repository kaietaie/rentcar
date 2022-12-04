FROM node:lts

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY . /app

RUN npm install

EXPOSE 8080 3000 80 443 25060 5000

#ENTRYPOINT ["npm", "run", "serverStart"]
CMD ["/bin/sh", "entrypoint.sh"]
