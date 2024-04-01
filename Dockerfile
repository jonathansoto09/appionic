FROM node:18.13.0  
WORKDIR .

COPY . .
RUN npm install

EXPOSE 3000
CMD ["node", "app.js"]