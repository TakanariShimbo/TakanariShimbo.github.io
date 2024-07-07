FROM node:22.4-alpine

WORKDIR /work
COPY . /work

RUN npm ci
RUN npm run build

EXPOSE 8000