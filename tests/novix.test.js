import { test } from 'node:test';
import assert from 'node:assert';
import { readFile } from 'fs/promises';
import { join } from 'path';

const examplesDir = join(process.cwd(), 'examples');

test('parses .novix JSON file correctly', async () => {
  const content = await readFile(join(examplesDir, 'test-get-swapi.novix'), 'utf-8');
  const req = JSON.parse(content);
  
  assert.strictEqual(req.method, 'GET');
});

test('executes GET request successfully', async () => {
  const content = await readFile(join(examplesDir, 'test-get-swapi.novix'), 'utf-8');
  const req = JSON.parse(content);

  const res = await fetch(req.url, { method: req.method, headers: req.headers });

  assert.strictEqual(res.status, 200);
  const data = await res.json();
  assert.strictEqual(data.name, 'R2-D2');
});
