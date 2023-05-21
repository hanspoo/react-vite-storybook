# Proxy vite storybook react

A test project to test proxy use in storybook.

## vite1

Typescirpt React project created with vite, then added storybook

## server

A simple express project just to test the proxy.

## Run the project

```
cd vite1
npm run dev
or 
npm run storybook
```

in other terminal

```
cd server
node src/index.js
```

The case was test how to configure the proxy when running the vite dev server 
directly or with storybook.

The code to create it was something like:

```
mkdir react-vite-storybook
cd react-vite-storybook/
npm init vite@latest vite1 -- --template react-ts
cd vite1
npm install
cd ..
mkdir server
cd server/
npm init -y
mkdir src
```


