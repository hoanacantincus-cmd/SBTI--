param(
  [int]$Port = 8080
)

$Root = Split-Path -Parent $MyInvocation.MyCommand.Path
$python = Get-Command python -ErrorAction SilentlyContinue

if (-not $python) {
  $python = Get-Command py -ErrorAction SilentlyContinue
}

if (-not $python) {
  Write-Error "Python was not found. Install Python or open index.html directly in a browser."
  exit 1
}

$url = "http://localhost:$Port/index.html"
Write-Host "Serving SBTI Poker Card from: $Root"
Write-Host "Open: $url"
Start-Process $url

if ($python.Name -eq "py.exe") {
  & $python.Source -m http.server $Port --directory $Root
} else {
  & $python.Source -m http.server $Port --directory $Root
}
