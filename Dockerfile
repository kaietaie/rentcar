FROM node:lts

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY . /app

RUN npm install ; npm install @mui/icons-material ; npm install sass

EXPOSE 8080 3000 80 443 25060 5000

#CMD ["npm", "run", "serverStart"]
#CMD ["npm", "start"]
CMD ["/bin/sh", "entrypoint.sh"]
