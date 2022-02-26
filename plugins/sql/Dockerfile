FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ponnuzzzz/Soul_rebel /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit
RUN git clone https://github.com/Ponnuzzzz/Soul-media

CMD ["node", "bot.js"]
