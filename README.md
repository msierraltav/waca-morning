## Wacamoclima v2.0 🥑

Desktop application to present a fantasy map with real time weather information fron diferents countries using Tauri/NextJs and taking the data from Open Meteo API.

## development

First init out project

```
pnpm tauri init

pnpm tauri dev
```

### update dependencies

```
pnpm update @tauri-apps/cli @tauri-apps/api --latest

pnpm outdated @tauri-apps/cli
```

cargo dependencies

```
cd src-tauri
cargo update
```

### Rust console

```
// unix/osx
RUST_BACKTRACE=1 tauri dev

// cmd version
set RUST_BACKTRACE=1
tauri dev

// powershell version
$env:RUST_BACKTRACE=1
tauri dev
```

## First version project -> 
[Wacamorning-map v1](wacamoclima-ui/)
