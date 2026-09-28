import crypto from "node:crypto";

const secret = "demo-secret";
const rawBody = JSON.stringify({ id: 1001, topic: "orders/create" });
const hmac = crypto.createHmac("sha256", secret).update(rawBody, "utf8").digest("base64");

function verify(raw, header, signingSecret) {
  const expected = crypto.createHmac("sha256", signingSecret).update(raw, "utf8").digest("base64");
  const a = Buffer.from(expected);
  const b = Buffer.from(header || "");
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

if (!verify(rawBody, hmac, secret)) throw new Error("Valid webhook failed verification");
if (verify(rawBody + "x", hmac, secret)) throw new Error("Tampered webhook passed verification");
console.log("PASS: valid webhook accepted and tampered payload rejected");
