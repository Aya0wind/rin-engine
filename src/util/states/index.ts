import { useStore } from 'reto';
import { SettingsStates, SettingsStatesStore } from './settings_states';
import { StageStates, StageStatesStore } from './stage_states';
import UIStates, { UIStatesStore } from './ui_states';
export interface States {
    uiStatesStore: UIStatesStore,
    stageStatesStore: StageStatesStore,
    settingStatesStore: SettingsStatesStore
}

export interface StatesStore extends States {

}

export function States(): StatesStore {
    const uiStatesStore = useStore(UIStates)
    const stageStatesStore = useStore(StageStates)
    const settingStatesStore = useStore(SettingsStates)
    return {
        uiStatesStore,
        stageStatesStore,
        settingStatesStore
    }
}
