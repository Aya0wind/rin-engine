use std::{path::PathBuf, str::FromStr};
use tauri::http::{method::Method, Request, Response, ResponseBuilder, Uri};

pub fn local_request_handle(request: &Request) -> Response {
    let file_not_allowed = ResponseBuilder::new().status(404).body(vec![]).unwrap();
    if request.method() != Method::GET {
        return file_not_allowed;
    }
    let uri = Uri::from_str(request.uri()).unwrap();
    let path = uri.path();
    let mut original_path = PathBuf::from_str("resource").unwrap();
    original_path.push(&path[1..]);
    ResponseBuilder::new()
        .status(404)
        .body(std::fs::read(original_path).unwrap())
        .unwrap()
}
