import { UIStatesStore } from './../states/ui_states';
import { StageStatesStore } from './../states/stage_states';
import { Command } from "."


export interface AvatarCommand extends Command {
    picture: string
}


export function Avatar(stage: UIStatesStore, args: AvatarCommand) {
    stage.setAvatar(args.picture)
}

