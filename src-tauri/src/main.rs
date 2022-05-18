// Definition in main.rs

use tauri::http::ResponseBuilder;
use tauri::{http::method::Method, http::Uri};
struct Database;

#[derive(serde::Serialize)]
struct CustomResponse {
    message: String,
    other_val: usize,
}

fn main() {
    tauri::Builder::default()
        .manage(Database {})
        // .register_uri_scheme_protocol("local", |app, request| {
        //     let file_not_allowed = ResponseBuilder::new().status(404).body(Vec::new());
        //     if request.method() != Method::GET {
        //         return Ok(file_not_allowed);
        //     }
        //     let uri = Uri::from_static(request.uri());
        //     let path = uri.path();
        //     let local_resource_path = std::path::PathBuf::from("resource");
        //     local_resource_path.push(path);
        // })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
