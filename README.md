# `rentsync-webhook`

> Process and store incoming lead data

## Requirements

- [x] POST endpoint for data ingestion
- [x] Logging of app data & leads to blob storage
- [x] Storage of structured lead data in database
- [x] Deploy to live url

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov

# Single test

--testNamePattern

npx jest -t 'testNamePattern'
```

## Build

```bash
yarn run build
```

## Ingest data

```bash
# DEPRECATED
curl -X POST -H "Content-Type: application/json" \
    -d '{
    "source": {
        "name": "sample_name",
        "ad_url": "sample_url",
        "ad_title": "sample_add_title"
    },
    "client": {
        "recipient_email": "sample@sample.com",
        "building_id": 1
    },
    "customer": {
        "first_name": "sample",
        "last_name": "sample",
        "full_name": "sample sample",
        "email": "sample@me.com",
        "phone": "4034567890",
        "comment": "sample_comment"
    },
    "sent_at": "now"
}' \
http://localhost:3000/webhook
```
