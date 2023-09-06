ARG NODE_VERSION=20
ARG ALWATR_NGINX_VERSION=1

FROM docker.io/library/node:${NODE_VERSION}-alpine as builder

ARG siteUrl=/
ARG noIndex=0

WORKDIR /app

ENV MY_ENVIRONMENT production
ENV siteUrl $siteUrl
ENV noIndex $noIndex

RUN apk add --no-cache git

COPY package.json *.lock .yarnrc.yml ./
COPY .yarn .yarn

RUN if [ -f *.lock ]; then \
      yarn install --immutable; \
    else \
      yarn install; \
    fi;

COPY . .

ENV NODE_ENV production

RUN yarn build

# ---

FROM ghcr.io/alimd/nginx-ws:${ALWATR_NGINX_VERSION} as nginx


ARG NGINX_FORCE_DOMAIN
ARG NGINX_FORCE_DOMAIN_STATUS=302

ENV NGINX_FORCE_DOMAIN $NGINX_FORCE_DOMAIN
ENV NGINX_FORCE_DOMAIN_STATUS $NGINX_FORCE_DOMAIN_STATUS

# Copy builded files from last stage
COPY --from=builder /app/dist/ ./

RUN pwd; ls -lAhF;
