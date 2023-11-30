FROM node:18.0-alpine
WORKDIR /app
COPY ./front-end ./
RUN npm install
RUN npm run build

FROM node:16.15-alpine
WORKDIR /app
COPY . .
RUN npm install --save mariadb
RUN npm install
COPY --from=0 /app/dist ./front-end/dist

EXPOSE 3011

CMD [ "node", "index.js" ]