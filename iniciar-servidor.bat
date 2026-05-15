@echo off
setlocal

set "PROJECT_DIR=%~dp0"
set "CODEX_NODE=%LOCALAPPDATA%\OpenAI\Codex\bin\node.exe"

if exist "%CODEX_NODE%" (
  cd /d "%PROJECT_DIR%"
  "%CODEX_NODE%" dev-server.mjs
  exit /b %ERRORLEVEL%
)

where node >nul 2>nul
if %ERRORLEVEL%==0 (
  cd /d "%PROJECT_DIR%"
  node dev-server.mjs
  exit /b %ERRORLEVEL%
)

echo Node.js nao foi encontrado.
echo.
echo Instale o Node.js LTS em:
echo https://nodejs.org/
echo.
echo Depois feche e abra o PowerShell novamente e rode:
echo node dev-server.mjs
echo.
pause
