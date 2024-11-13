FROM node:18

WORKDIR /docker_dir/

COPY package.json yarn.lock ./ 
# If only these files change, Docker can reuse the cached layer for subsequent builds.

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
