import { BackGroundStates, BackGroundStatesStore } from './BackGroundStates/index';
import { useStore } from 'reto';
import { FiguresStates, FiguresStatesStore } from './FiguresStates/index';
import { SoundStates, SoundStatesStore } from './SoundStates/index';

export interface StageStates {
    figure: FiguresStatesStore
    sound: SoundStatesStore,
    backGround: BackGroundStatesStore,
}
export interface StageStatesStore extends StageStates {
}


export function StageStates(): StageStatesStore {
    const soundStates = useStore(SoundStates)
    const figureStates = useStore(FiguresStates)
    const backGroundStates = useStore(BackGroundStates)
    return {
        figure: figureStates,
        sound: soundStates,
        backGround: backGroundStates,
    }
}
