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
pub struct Stage {
    name: String,
    characters: Vec<Chracter>,
    background_music: Option<Sound>,
    commands: Vec<Command>,
}

#[derive(Debug, Deserialize, Serialize)]
pub struct Chracter {
    name: String,
    avatar: Image,
    figure: Image,
    position: Position,
}

#[derive(Debug, Deserialize, Serialize)]
pub enum Command {
    Say(),
}
