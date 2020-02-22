# Introduction
This is a pet project I have been working on to understand how GraphQL works with out using Apollo GraphQL just vanilla GraphQL with Express JS.

## Prerequists
1. Node JS 
2. Docker
3. MongoDB

## Getting Started
1. Clone and run `` npm install or yarn install``
2. Run ``npm run dev or yarn run dev`` to run in development mode with nodemon
3. Run `` npm run test   `` to run tests with mocha.
4. Run `` npm  run build `` to build the project 
5. Run `` npm run server `` to run in production mode after build.

## Docker Image
If you want to run this as docker app run
1. ``docker image -t IMAGE_NAME:TAG_NAME .``
2.  `` docker run -d --name DOCKER_CONTAINER_NAME -p 4000:4000  IMAGE_NAME:TAG_NAME . ``