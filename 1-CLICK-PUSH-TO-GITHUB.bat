@echo off
setlocal
title 1-Click Upload to GitHub
color 0B
echo.
echo ============================================================
echo   VETERINARY MICROBIOLOGY STUDIO - 1-CLICK GITHUB UPLOADER
echo ============================================================
echo.

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"
set "SRC=%ROOT%"
set "DEST=%ROOT%\repo"
set "REPO_URL=https://github.com/fazalzama77-sys/VET-MICROBIOLOGY.git"

cd /d "%ROOT%"

:: Step 0: Ensure Git is available
where git >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    color 0C
    echo [ERROR] Git is not installed or not in your system PATH.
    echo Please install Git from https://git-scm.com and try again.
    goto :finish
)

:: Step 0b: Ensure Git repository is initialized
if not exist "%ROOT%\.git" (
    echo [*] Initializing local Git repository...
    git init >nul 2>&1
)

:: Ensure current branch is 'main'
git branch -M main >nul 2>&1

:: Ensure origin remote is correctly configured
git remote get-url origin >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo [*] Setting remote origin to %REPO_URL%...
    git remote add origin %REPO_URL%
) else (
    git remote set-url origin %REPO_URL%
)

:: Ensure user identity is set
git config user.name >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    git config user.name "fazalzama77-sys"
)
git config user.email >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    git config user.email "fazalzama77@gmail.com"
)

:: Step 1: Synchronize offline repo folder
echo [1/3] Synchronizing 'repo' folder...
robocopy "%SRC%" "%DEST%" /MIR /XD .git .claude repo /XF SYNC-TO-REPO.bat 1-CLICK-PUSH-TO-GITHUB.bat *.tmp *.bak *.log >nul

:: Step 2: Stage and commit local changes
echo [2/3] Checking for modified files...
git add -A

git diff --cached --quiet
if %ERRORLEVEL% EQU 0 (
    echo No local changes to commit. Proceeding to sync with remote...
) else (
    echo Saving updates to local Git...
    git commit -m "Update Microbiology Studio content (%date% %time%)"
)

:: Step 3: Upload to GitHub
echo [3/3] Uploading to GitHub...
git pull --rebase --autostash origin main >nul 2>&1
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    color 0A
    echo.
    echo ============================================================
    echo   [SUCCESS] ALL CHANGES UPLOADED TO GITHUB!
    echo   Repository: %REPO_URL%
    echo   Your website will update automatically in 1-2 minutes.
    echo ============================================================
) else (
    color 0C
    echo.
    echo ============================================================
    echo   [NOTICE] Upload encountered an issue. Check internet or Git.
    echo ============================================================
)

:finish
echo.
echo Press any key to close this window...
pause >nul
