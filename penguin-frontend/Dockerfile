FROM node:8.12.0

COPY . /var/www

WORKDIR /var/www

RUN npm install
RUN npm install serve -g
RUN npm install pm2 -g
RUN npm run build

EXPOSE 5000

CMD pm2-docker start app.config.json
