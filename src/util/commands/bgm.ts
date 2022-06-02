import { StageStatesStore } from '../states/stage_states';
import { getLocalAsset } from "../asset_loader"
import { UIStatesStore } from "../states/ui_states"
import { States } from '../states';


export interface BGMComand {
    music: string
}


export function BGM({ stageStatesStore }: States, args: BGMComand) {
    stageStatesStore.setBackGroundMusic(args.music)
}

