// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// keep this method for learning prouporses.

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

fn main() {
  
  tauri::Builder::default()
    // .invoke_handler(tauri::generate_handler![get_apikey])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
