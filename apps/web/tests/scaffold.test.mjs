import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
test('public site includes original Dunya title', () => {
 const page = readFileSync(new URL('../app/page.tsx', import.meta.url), 'utf8');
 assert.match(page, /Dunya/);
});
