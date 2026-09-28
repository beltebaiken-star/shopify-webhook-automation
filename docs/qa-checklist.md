# QA Checklist

- [ ] HMAC signature is verified
- [ ] unsupported topics are rejected safely
- [ ] duplicate webhook IDs are ignored
- [ ] handler returns quickly
- [ ] retries are bounded
- [ ] failures are observable
- [ ] replay path exists for recoverable events
