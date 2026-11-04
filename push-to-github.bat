@echo off
setlocal
echo ========================================================
echo   Easin Ali Portfolio - Push to GitHub Utility
echo ========================================================
echo.
set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/username/portfolio.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] No URL provided. Exiting.
    pause
    exit /b
)

cd /d "%~dp0"
set "PATH=%~dp0..\.tools\git\cmd;%PATH%"

echo.
echo [1/3] Setting remote origin...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo [2/3] Preparing branch main...
git branch -M main

echo [3/3] Pushing files to GitHub...
git push -u origin main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ========================================================
    echo  SUCCESS! Your files are now on GitHub!
    echo  Now go to Vercel and click 'Redeploy' or 'Deploy'.
    echo ========================================================
) else (
    echo.
    echo [NOTE] If you were prompted to sign in, please complete the GitHub login in the popup.
)
echo.
pause

