import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders Clara Chen's personal index", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Clara Chen — A quiet place for loud ideas<\/title>/i);
  assert.match(html, /A quiet place/);
  assert.match(html, /for loud ideas\./);
  assert.match(html, /aria-label="Main navigation"/);
  assert.match(html, /id="index"/);
  assert.match(html, /id="about"/);
  assert.match(html, /Making/);
  assert.match(html, /Noticing/);
  assert.match(html, /Becoming/);
  assert.match(html, /property="og:image" content="https:\/\/clarachen\.dev\/og\.png"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);
  assert.doesNotMatch(html, /codex-preview|figmacapture|html-to-design\/capture\.js/i);
});

test("ships the bespoke social card and accessibility safeguards", async () => {
  const css = await readFile(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  await access(new URL("../public/og.png", import.meta.url));
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /@media \(max-width:\s*720px\)/);
  assert.match(css, /--vermilion:\s*#ef5b3f/i);
});
