$ErrorActionPreference = "Stop"

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$androidStudioJbr = "C:\Program Files\Android\Android Studio\jbr"
$androidStudioJava = Join-Path $androidStudioJbr "bin\java.exe"

function Invoke-NativeCommand {
  param(
    [Parameter(Mandatory = $true)]
    [string]$Command,
    [string[]]$Arguments = @()
  )

  & $Command @Arguments
  if ($LASTEXITCODE -ne 0) {
    throw "$Command exited with code $LASTEXITCODE"
  }
}

if (-not $env:JAVA_HOME -and (Test-Path $androidStudioJava)) {
  $env:JAVA_HOME = $androidStudioJbr
}

if ($env:JAVA_HOME) {
  $javaBin = Join-Path $env:JAVA_HOME "bin"
  $env:Path = "$javaBin;$env:Path"
}

Push-Location $repoRoot
try {
  Invoke-NativeCommand "npm" @("run", "build")
  Invoke-NativeCommand "npx" @("cap", "sync", "android")

  Push-Location (Join-Path $repoRoot "android")
  try {
    Invoke-NativeCommand ".\gradlew.bat" @("assembleDebug")
  } finally {
    Pop-Location
  }
} finally {
  Pop-Location
}
