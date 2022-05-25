use mlua::ToLua;

use super::types::Sound;

pub struct Say {
    character: String,
    text: String,
    voice: Option<Sound>,
}

pub struct Bgm {
    music: Option<Sound>,
}

pub struct Set<T>
where
    for<'a> T: ToLua<'a>,
{
    attribute_name: String,
    value: T,
}

pub struct PlaySound {
    sound: Sound,
}

pub struct Branch {
    sound: Sound,
}
