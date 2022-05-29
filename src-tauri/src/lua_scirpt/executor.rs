use std::{collections::HashMap, sync::Mutex};

use mlua::{chunk, Chunk, Lua, LuaSerdeExt, StdLib, Table, Thread, Value};
use serde_json::json;

lazy_static::lazy_static! {
    pub static ref EXECUTOR:Executor = {
            let lua = Lua::new();
            lua.load_from_std_lib(StdLib::ALL_SAFE).unwrap();
            let index_source = include_str!("impl/index.lua");
            let commands_source = include_str!("impl/commands.lua");
            let execute_source = include_str!("impl/execute.lua");
            let main_source = include_str!("impl/main.lua");
            lua.load(&index_source).exec().unwrap();
            lua.load(&commands_source).exec().unwrap();
            lua.load(&execute_source).exec().unwrap();
            lua.load(&main_source).exec().unwrap();
            Executor::new( Mutex::new(lua))
    };
}

pub struct Executor {
    lua_state: Mutex<Lua>,
}

impl Executor {
    pub fn new(lua_state: Mutex<Lua>) -> Self {
        Self { lua_state }
    }

    pub fn next_coro_command(&self, response: String) -> String {
        let lua = self.lua_state.lock().unwrap();
        {
            lua.globals().set("__ResponseTemp__", response).unwrap();
            let main_thread: Thread = lua.globals().get("__MainThread__").unwrap();
            loop {
                if let Ok(value) = main_thread.resume::<_, Option<Table>>(()) {
                    if let Some(table) = value {
                        if table.len().unwrap() != 0 {
                            return serde_json::to_string(&table).unwrap();
                        }
                    }
                } else {
                    return json!("over").to_string();
                }
            }
        }
    }
}
