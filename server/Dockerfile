FROM node:24-alpine
RUN apk add --no-cache curl
WORKDIR /src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]