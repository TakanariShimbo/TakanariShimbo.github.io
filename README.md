## 🚀 About

This is the repository of "My Github Pages".

https://takanarishimbo.github.io/

This is developed by Vite + React + Tailwind.

![VITExREACTxTAILWIND](/README/vite-react-tailwind.png)

## 🐋 Docker

- require: docker

### Build server

```bash
# Please set the .env file before executing it.
docker compose up -d
```

You can check here (http://localhost:8000/) after building server.

### Build image

```bash
# Please change the username and tag correctly.
docker build -t takanarishimbo/my-github-pages:v1.0.0 .
```

## 🟩 NodeJS

- require: nodejs

### Install and build

```sh
# install modules
npm ci

# build
npm run build
```

### Build server

```sh
# on vite server
npm run vite-preview
```

```sh
# on static server
npm run static-preview
```

You can check here (http://localhost:8000/) after building server.
