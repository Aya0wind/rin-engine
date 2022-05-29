// Definition in main.rs

use std::sync::{Arc, Mutex};

use lua_scirpt::EXECUTOR;
use mlua::Lua;
use tauri::http::ResponseBuilder;
use tauri::{http::method::Method, http::Uri};
use tauri::{AssetResolver, Manager, State};
struct Database;
use tauri::async_runtime::channel;
mod local_assets_loader;
mod lua_scirpt;
// mod lua_scirpt;
#[derive(serde::Serialize)]
struct CustomResponse {
    message: String,
    other_val: usize,
}

#[tauri::command]
fn next_command(response: String) -> String {
    EXECUTOR.next_coro_command(response)
}

fn main() {
    tauri::Builder::default()
        // .register_uri_scheme_protocol("local", |app, request| {
        //     Ok(local_assets_loader::local_request_handle(request))
        // })
        // .plugin(plugin)
        .invoke_handler(tauri::generate_handler![next_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
