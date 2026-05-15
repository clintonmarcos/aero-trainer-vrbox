$ProjectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$CodexNode = Join-Path $env:LOCALAPPDATA "OpenAI\Codex\bin\node.exe"

Set-Location $ProjectDir

if (Test-Path $CodexNode) {
  & $CodexNode dev-server.mjs
  exit $LASTEXITCODE
}

$Node = Get-Command node -ErrorAction SilentlyContinue
if ($Node) {
  & node dev-server.mjs
  exit $LASTEXITCODE
}

Write-Host "Node.js nao foi encontrado."
Write-Host ""
Write-Host "Instale o Node.js LTS em: https://nodejs.org/"
Write-Host "Depois feche e abra o PowerShell novamente e rode: node dev-server.mjs"
Read-Host "Pressione Enter para sair"
