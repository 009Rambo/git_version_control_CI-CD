FROM node:18

WORKDIR /opt/app

COPY build /opt/app/build

EXPOSE 3000

CMD [ "npx", "serve", "-s", "build" ]

