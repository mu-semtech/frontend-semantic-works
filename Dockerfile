FROM madnificent/ember:4.12.1 as builder

LABEL maintainer="aad@semantic.works"

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# RUN npx update-browserslist-db@latest
RUN ember build -prod

FROM semtech/static-file-service:0.2.0

COPY --from=builder /app/dist /data
