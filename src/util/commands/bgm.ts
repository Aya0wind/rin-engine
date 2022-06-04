import { StageStatesStore } from '../../states/StageStates';
import { getLocalAsset } from "../asset_loader"
import { States } from '../../states';


export interface BGMComand {
    music: string
}


export function BGM({ stage }: States, args: BGMComand) {
    stage.sound.setBackGroundMusic(args.music)
}

