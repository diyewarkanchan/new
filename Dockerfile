FROM node:7
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD Exam.js
EXPOSE 9000
