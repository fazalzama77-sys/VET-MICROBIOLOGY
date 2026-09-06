@echo off
title Sync to Repo Folder
color 0B
echo.
echo ============================================================
echo   VETERINARY MICROBIOLOGY STUDIO - SYNC TO REPO FOLDER
echo ============================================================
echo.
echo Synchronizing all project files to the 'repo' folder...
echo.

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"
set "SRC=%ROOT%"
set "DEST=%ROOT%\repo"

robocopy "%SRC%" "%DEST%" /MIR /XD .git .claude repo /XF SYNC-TO-REPO.bat 1-CLICK-PUSH-TO-GITHUB.bat *.tmp *.bak *.log >nul

if %ERRORLEVEL% GEQ 8 goto :error

:success
color 0A
echo [SUCCESS] The 'repo' folder is now 100%% up to date!
echo Location: %DEST%
echo.
echo All files and folders [assets, data, images, js, tools]
echo are neatly arranged sequentially and ready for GitHub!
goto :end

:error
color 0C
echo [ERROR] An error occurred during synchronization.

:end
echo.
echo ============================================================
pause
