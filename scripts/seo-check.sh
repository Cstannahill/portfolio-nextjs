# scripts/seo-check.sh
URL=${1:-http://localhost:3000}

echo "=== HEADERS ==="
curl -sI $URL | grep -iE 'location|status'

echo "=== OG META ==="
curl -s $URL | grep -i '<meta property="og:' | head

echo "=== CANONICAL ==="
curl -s $URL | grep -i '<link rel="canonical"'
