use mlua::{Function, Lua, Table, ToLua};
use serde::{Deserialize, Serialize};

#[derive(Debug, Deserialize, Serialize)]
pub struct Sound {
    url: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Image {
    url: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Position {
    url: String,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Chracter {
    name: String,
    avatar: Image,
    figure: Image,
    position: Position,
}

pub trait Command {
    fn build<'a>(lua: &'a Lua, commands: &Table) -> Function<'a>;
}
