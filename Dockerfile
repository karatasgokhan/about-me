FROM node:22-alpine

WORKDIR /app

# Install dependencies from the lockfile so builds are reproducible
COPY package.json yarn.lock .yarnrc.yml ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
