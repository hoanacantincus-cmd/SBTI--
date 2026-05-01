@echo off
setlocal

set PORT=%~1
if "%PORT%"=="" set PORT=8080

cd /d "%~dp0"
echo Serving Poker SBTI from: %CD%
echo Open: http://localhost:%PORT%/index.html
start "" "http://localhost:%PORT%/index.html"

python -m http.server %PORT% --directory "%CD%"
