FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
RUN apt-get update && \
    apt-get install -y wget && \
    wget -qO- https://github.com/jwilder/dockerize/releases/download/v0.6.1/dockerize-linux-amd64-v0.6.1.tar.gz | \
    tar -C /usr/local/bin -xzvf - && \
    apt-get remove -y wget && apt-get clean && rm -rf /var/lib/apt/lists/*
COPY . .
EXPOSE 3000

CMD ["dockerize", "-wait", "tcp://db:3306", "node", "index.js"]
