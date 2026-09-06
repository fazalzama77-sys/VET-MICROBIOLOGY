@echo off
title Vet Microbiology - local server
cd /d "%~dp0.."
echo.
echo  Veterinary Microbiology Studio
echo  -------------------------------
echo  Open this address in your browser:
echo.
echo      http://localhost:5177
echo.
echo  Press Ctrl+C in this window to stop the server.
echo.
python -m http.server 5177
pause
