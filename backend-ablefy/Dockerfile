FROM node:16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma

ENV DATABASE_URL="postgres://hector@localhost:5432/postgres"

RUN npm install --ignore-scripts
RUN npx prisma generate

COPY . .

EXPOSE 5000

CMD ["npm","start"]
