#FROM php:8.3-rc
FROM yeszao/php:5.4.45-fpm-alpine

COPY ./dist /root/html/play-with-css

WORKDIR /root/html/

EXPOSE 9191

CMD php -S 127.0.0.1:9191
