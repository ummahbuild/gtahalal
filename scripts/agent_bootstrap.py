#!/usr/bin/env python3
"""Dependency-free local agent orientation; never installs packages or calls network."""
from pathlib import Path
import json
import shutil
import subprocess
import sys

root = Path(__file__).resolve().parents[1]
required = [
    "README.md", "AGENTS.md", "CONTRIBUTING.md", "docs/REQUIREMENTS_INDEX.md",
    "docs/AGENT_ONE_URL_START.md", "docs/ISLAMIC_CONTENT_POLICY.md",
    "apps/game/package.json", "apps/web/package.json", "apps/studio/package.json",
    "packages/game-core/package.json", "packages/content/package.json",
]
errors = []
for name in required:
    path = root / name
    if not path.is_file():
        errors.append(f"missing {name}")
        continue
    if name.endswith("package.json"):
        try:
            json.loads(path.read_text(encoding="utf-8"))
        except (OSError, ValueError) as exc:
            errors.append(f"invalid {name}: {exc}")
print("Dunya agent orientation")
print("Repository:", root)
print("Node:", shutil.which("node") or "not installed")
print("pnpm:", shutil.which("pnpm") or "not installed")
print("Python:", sys.version.split()[0])
print("Lockfile:", "present" if (root / "pnpm-lock.yaml").exists() else "MISSING — frozen install blocked")
if not (root / "pnpm-lock.yaml").exists():
    errors.append("missing pnpm-lock.yaml; generate in registry-enabled environment and commit")
for name in ["apps/game/src/WorldPreview.tsx", "apps/game/src/SessionSafeguards.tsx"]:
    if not (root / name).exists():
        errors.append(f"missing gameplay source: {name}")
print("Suggested first issue: #1/#26 reproducible build, then #58/#61 gameplay QA")
print("No dependencies installed; no tests or deployment attempted.")
for error in errors:
    print("BLOCKER:", error)
sys.exit(1 if errors else 0)
