import { States } from '../states';
import { StageStatesStore } from '../states/stage_states';


export interface BGComand {
    picture: string
}


export function BG({ stageStatesStore }: States, args: BGComand) {
    stageStatesStore.setBackGround(args.picture)
}

