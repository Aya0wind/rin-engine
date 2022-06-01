import { StageStatesStore } from './../states/stage_states';
import { Command } from "."


export interface BGComand extends Command {
    picture: string
}


export function BG(stage: StageStatesStore, args: BGComand) {
    stage.setBackGround(args.picture)
}

