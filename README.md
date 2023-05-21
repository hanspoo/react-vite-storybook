# Proxy vite storybook react

A test project to test proxy use in storybook.

## vite1

React project create with vite, then added storybook

## server

A very simple express project to start and thes the proxy


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


