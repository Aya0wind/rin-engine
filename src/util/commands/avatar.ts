import { UIStatesStore } from '../states/ui_states';
import { StageStatesStore } from '../states/stage_states';
import { States } from '../states';


export interface AvatarCommand {
    picture: string
}


export function Avatar({ uiStatesStore }: States, args: AvatarCommand) {
    uiStatesStore.setAvatar(args.picture)
}

