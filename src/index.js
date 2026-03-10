#!/usr/bin/env node

import { readFile } from 'fs/promises';
import { join } from 'path';

async function run(filePath) {
  const content = await readFile(join(process.cwd(), filePath), 'utf-8');
  const req = JSON.parse(content);

  const res = await fetch(req.url, {
    method: req.method,
    headers: req.headers,
    body: req.body ? JSON.stringify(req.body) : undefined,
  });

  const data = await res.json().catch(() => null);
  console.log(JSON.stringify({ status: res.status, data }, null, 2));
}

run(process.argv[2]).catch(e => {
  console.error(e.message);
  process.exit(1);
});
