FROM node:10.13-alpine AS Builder
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install  --silent && mv node_modules ../
RUN npm run build
COPY . .
EXPOSE 4000
CMD npm run start


FROM node:10.13-alpine 
ENV NODE_ENV production
WORKDIR /usr/dist/
COPY --from=Builder ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY --from=Build /usr/src/app/dist  .
RUN npm install --production
EXPOSE 4000
CMD npm run start