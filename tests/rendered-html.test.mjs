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

test("server-renders Clara Chen's minimal homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>Clara Chen<\/title>/i);
  assert.match(html, /aria-label="Clara Chen"/);
  assert.match(html, />Clara<\/span>/);
  assert.match(html, />Chen<\/span>/);
  assert.match(html, />LinkedIn<\/a>/);
  assert.match(html, />GitHub<\/a>/);
  assert.match(html, />Email<\/a>/);
  assert.doesNotMatch(html, /Main navigation|I explore the space|Researcher\. Designer\.|Systems Thinker|Explore My Work/);
  assert.match(html, /<svg[^>]*aria-hidden="true"/);
  assert.doesNotMatch(html, /<text\b/i);
  assert.match(html, /name="twitter:card" content="summary"/);
  assert.doesNotMatch(html, /codex-preview|figmacapture|html-to-design\/capture\.js/i);
});

test("ships responsive, deterministic and accessible visual layers", async () => {
  const [css, artwork] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(
      new URL("../app/components/home/HomeArtwork.tsx", import.meta.url),
      "utf8",
    ),
  ]);

  await access(new URL("../public/og.png", import.meta.url));
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.match(css, /@media \(max-width:\s*899px\)/);
  assert.match(css, /@media \(max-width:\s*699px\)/);
  assert.match(css, /--cc-paper:\s*#f6f2f0/i);
  assert.match(artwork, /viewBox="0 0 1448 1086"/);
  assert.match(artwork, /aria-hidden="true"/);
  assert.doesNotMatch(artwork, /Math\.random/);
});
