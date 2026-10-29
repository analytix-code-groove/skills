#!/usr/bin/env bash
# Empaqueta SKILL.md + references/ en analytix-social-content.skill
set -euo pipefail

NAME="analytix-social-content"
DIR="$(cd "$(dirname "$0")" && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

mkdir -p "$TMP/$NAME"
cp "$DIR/SKILL.md" "$TMP/$NAME/"
cp -R "$DIR/references" "$TMP/$NAME/"
find "$TMP" -name .DS_Store -delete

rm -f "$DIR/$NAME.skill"
(cd "$TMP" && zip -qr "$DIR/$NAME.skill" "$NAME")
echo "Generado: $DIR/$NAME.skill"
