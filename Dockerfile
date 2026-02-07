FROM node:25-alpine

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install
COPY . .

RUN npm run build
EXPOSE 3000
RUN chown -R 1000:1000 /app
USER 1000
CMD ["npm", "start"]
