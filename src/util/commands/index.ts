import { Command } from "@tauri-apps/api/shell"
import { Avatar } from "./avatar"
import { BG } from "./bg"
import { BGM } from "./bgm"
import { Say } from "./say"

export interface CommandMap {
    [name: string]: (any, Command) => any
}

export var Map: CommandMap = {
    'Say': Say,
    'BGM': BGM,
    'BG': BG,
    'Avatar': Avatar
}


