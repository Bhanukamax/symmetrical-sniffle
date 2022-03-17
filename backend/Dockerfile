FROM node:12-alpine
WORKDIR /usr/src/backend
COPY package.json .
COPY package-lock.json .
RUN mkdir -p node_modules
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "build"]

