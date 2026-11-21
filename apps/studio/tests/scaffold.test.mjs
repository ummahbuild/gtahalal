import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
test('studio provides an editorial page and layout', () => {
  const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
  const layout = readFileSync(new URL('../app/layout.tsx', import.meta.url), 'utf8');
  assert.match(page, /Mission Studio/);
  assert.match(layout, /RootLayout/);
});
