#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
echo "Dunya local verification — no GitHub Actions minutes"
python3 scripts/audit_repo.py
if ! command -v pnpm >/dev/null 2>&1; then
  echo "pnpm is missing. Run: corepack enable && corepack prepare pnpm@9.15.4 --activate" >&2
  exit 1
fi
if [[ ! -f pnpm-lock.yaml ]]; then
  echo "Lockfile missing. Generate it in a registry-enabled environment before running frozen verification." >&2
  exit 1
fi
pnpm install --frozen-lockfile --prefer-offline
pnpm typecheck
pnpm test
if [[ "${1:-quick}" == "full" ]]; then pnpm build; fi
echo "Local verification passed (${1:-quick})."
