#!/usr/bin/env python3
"""Fast, dependency-free pre-PR repository audit. No network, no GitHub minutes."""
from pathlib import Path
import json
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
EXCLUDE = {'.git', 'node_modules', '.next', 'dist', '.turbo', '.cache'}
TEXT_EXT = {'.md', '.mdx', '.ts', '.tsx', '.js', '.mjs', '.json', '.yml', '.yaml'}
violations = []
checked = 0

for path in ROOT.rglob('*'):
    if not path.is_file() or path.suffix not in TEXT_EXT or any(p in EXCLUDE for p in path.parts):
        continue
    rel = path.relative_to(ROOT).as_posix()
    try:
        content = path.read_text(encoding='utf-8')
    except UnicodeError:
        continue
    checked += 1
    for lineno, line in enumerate(content.splitlines(), 1):
        if re.search(r'https?://(?:app\.)?notion\.(?:so|com)/', line, re.I):
            violations.append(f'{rel}:{lineno}: private workspace URL')
        if re.search(r'-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----', line):
            violations.append(f'{rel}:{lineno}: private key material')
        if re.search(r'(?:sk_live_|ghp_|github_pat_)[A-Za-z0-9_]{12,}', line):
            violations.append(f'{rel}:{lineno}: possible live credential')

for app in ('game', 'web', 'studio'):
    path = ROOT / 'apps' / app / 'package.json'
    if not path.is_file():
        violations.append(f'{path.relative_to(ROOT)}: missing package manifest')
        continue
    data = json.loads(path.read_text())
    for name in ('build', 'lint', 'typecheck', 'test'):
        script = data.get('scripts', {}).get(name, '')
        if not script or 'pending' in script or 'echo ' in script:
            violations.append(f'apps/{app}/package.json: {name} is missing/placeholder')

for package in ('game-core', 'content'):
    if not (ROOT / 'packages' / package / 'package.json').exists():
        violations.append(f'packages/{package}/package.json: missing')

if not (ROOT / 'pnpm-lock.yaml').exists():
    violations.append('pnpm-lock.yaml: missing (frozen install unavailable)')

print(f'Inspected {checked} source files; {len(violations)} issue(s).')
for issue in violations:
    print('FAIL:', issue)
sys.exit(1 if violations else 0)
