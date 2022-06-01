import { StageStatesStore } from './../states/stage_states';
import { Command } from "."
import { getLocalAsset } from "../asset_loader"
import { UIStatesStore } from "../states/ui_states"


export interface BGMComand extends Command {
    music: string
}


export function BGM(stage: StageStatesStore, args: BGMComand) {
    stage.setBackGroundMusic(args.music)
}

