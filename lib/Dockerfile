FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ponnuzzzz/Soul-rebel /Soul/Rebel
WORKDIR /Soul/Rebel
ENV TZ=Asia/Kolkata
RUN npm install supervisor -g
RUN yarn install --ignore-engines

CMD ["node", "index.js"]
