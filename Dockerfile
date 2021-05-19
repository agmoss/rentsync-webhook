FROM node:lts-alpine AS builder
WORKDIR /usr/src/app
COPY . .
RUN npm install
RUN npm run build

FROM node:lts-alpine AS dependencies
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --production

FROM node:lts-alpine as server
WORKDIR /usr/src/app
COPY package.json ./
COPY src ./
COPY Dockerfile .env* ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=dependencies /usr/src/app/node_modules ./node_modules
EXPOSE 3000
CMD npm run start:prod