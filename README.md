## Wacamoclima v3.0 🥑

```Version : v3.0.0 using Tauri v2.0```

Desktop application to present a fantasy map with real time weather information fron diferents countries using Tauri/NextJs and taking the data from Open Meteo API.

![weather avocado map](./docs/mappreview.png)

## Cool Features

- [x] Is a desktop app !
- [ ] and a mobile app !!!
- [ ] with automatic updates
- [x] 🌞 Real time weather information
- [x] 🗺️ Cute map with the weather of diferent capitals cities.
- [x] ☀️ Weather of important citye of the selected country.
- [x] 📅 Provide current time and weather in city
- [x] 🔮 5 days forecast
- [x] 🌡 Max and Min temp for all 5 days forecast
- [ ] 🌈 Cute icons!
- [ ] 🔎 Search City Forecast

## development

First init out project

```
pnpm install

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

### Publishing
to publish the app and create an installable package simply run

```
pnpm tauri build
```

a key is needed to publish new versions and the autoupdater get it.
[reference](https://tauri.app/v1/guides/distribution/updater/)

also the following Environment  Variable is needed in the builder machine.

```
TAURI_PRIVATE_KEY : required
TAURI_KEY_PASSWORD : optional
```

## First version project: 
[Wacamorning-map v1](https://github.com/msierraltav/waca-morning/tree/vue-first-version/wacamoclima-ui)
