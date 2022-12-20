# syntax=docker/dockerfile:1
FROM node:18.12.1-alpine as build_stage
ARG BE_HOST 
ARG BE_PORT 
WORKDIR /app
COPY package*.json /app/
RUN npm ci 
COPY . .
RUN REACT_APP_DOMAIN=${DOMAIN} \ 
  REACT_APP_API_KEY=${API_KEY} \ 
  npm run build
EXPOSE 3000
#CMD [ "npm", "run build" ]
FROM nginx:1.23.2-alpine as production_stage
WORKDIR /var/www/html
COPY --from=build_stage /app/build/ /var/www/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
