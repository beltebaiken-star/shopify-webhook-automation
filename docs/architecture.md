# Architecture

```text
Shopify webhook
  -> HMAC verification
  -> event normalization
  -> idempotency check
  -> queue / processor
  -> business action
  -> logs + retry / dead-letter handling
```

Webhook endpoints should acknowledge quickly and move heavier work into a resilient processing layer.
