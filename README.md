# `rentsync-webhook`

## Ingest data

```bash
curl -X POST -H "Content-Type: application/json" \
    -d '{
    "source": {
        "name": "sample_name",
        "ad_url": "sample_url",
        "ad_title": "sample_add_title"
    },
    "client": {
        "recipient_email": "sample@sample.com",
        "building_id": 1,
        "customer": {
            "first_name": "sample",
            "last_name": "sample",
            "full_name": "sample sample",
            "email": "sample@me.com",
            "phone": "4034567890",
            "comment": "sample_comment"
        },
        "sent_at": "now"
    }
}' \
http://localhost:3000/webhook
```
