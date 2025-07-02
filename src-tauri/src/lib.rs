// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#[cfg_attr(mobile, tauri::mobile_entry_point)]

pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            #[cfg(desktop)]
            app.handle().plugin(tauri_plugin_updater::Builder::new().build());
            Ok(())
        })
        .plugin(tauri_plugin_process::init())
        .plugin(tauri_plugin_http::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// keep this method for learning prouporses.

// .invoke_handler(tauri::generate_handler![get_apikey])

// #[tauri::command]
// fn greet(name: &str) -> String {
//   println!("Message from Rust in console.");
//   format!("Hello, {}", name )
// }

// #[tauri::command]
// fn get_apikey() -> String{
//   dotenv().ok();
//   let api_token : String = std::env::var("ACCUWATHER_API").expect("API_TOKEN must be set.");
//   api_token
// }
