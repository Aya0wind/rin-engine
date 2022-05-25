// Definition in main.rs

use tauri::http::ResponseBuilder;
use tauri::{http::method::Method, http::Uri};
use tauri::{AssetResolver, Manager};
struct Database;

mod local_assets_loader;
// mod lua_scirpt;
#[derive(serde::Serialize)]
struct CustomResponse {
    message: String,
    other_val: usize,
}

fn main() {
    tauri::Builder::default()
        .manage(Database {})
        .register_uri_scheme_protocol("local", |app, request| {
            Ok(local_assets_loader::local_request_handle(request))
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
