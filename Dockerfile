FROM php:8.3-rc

COPY ./dist /root/html/play-with-css

WORKDIR /root/html/

EXPOSE 9191

CMD php -S 127.0.0.1:9191
