FROM node:14
ADD package.json package.json
RUN npm install
ADD index.js /index.js
ADD Calculator.js /Calculator.js
CMD [ "node", "/index.js" ]