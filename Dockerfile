FROM node:10.13-alpine AS Builder
ENV NODE_ENV dev
WORKDIR /usr/src/build
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . .
RUN npm install
RUN npm run build


FROM node:10.13-alpine 
ENV NODE_ENV production
WORKDIR /usr/dist/
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY --from=Builder /usr/src/build  .
RUN npm install --production
EXPOSE 4000
CMD npm run serve