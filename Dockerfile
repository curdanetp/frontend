# syntax=docker/dockerfile:1
FROM node:18.12.1-alpine as build_stage
USER  me
WORKDIR /app
COPY package*.json /app/
RUN npm ci 
COPY . .
EXPOSE 3000
RUN npm run build
#CMD [ "npm", "run build" ]
FROM nginx:1.23.2-alpine as production_stage
USER  me
WORKDIR /var/www/html
COPY --from=build_stage /app/build/ /var/www/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
