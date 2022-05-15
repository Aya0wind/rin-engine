// Definition in main.rs

struct Database;

#[derive(serde::Serialize)]
struct CustomResponse {
    message: String,
    other_val: usize,
}

#[tauri::command]
async fn some_other_function() -> Option<CustomResponse> {
    Some(CustomResponse {
        message: "111".into(),
        other_val: 1111,
    })
}

fn main() {
    tauri::Builder::default()
        .manage(Database {})
        .invoke_handler(tauri::generate_handler![some_other_function])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
