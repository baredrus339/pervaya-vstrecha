Set-Location -LiteralPath $PSScriptRoot
Write-Host "Сайт открыт на http://127.0.0.1:8765"
python -m http.server 8765 --bind 0.0.0.0
