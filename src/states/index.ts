import { useStore } from 'reto';
import { SettingsStates, SettingsStatesStore } from './SettingStates';
import { StageStates, StageStatesStore } from './StageStates';
import TextUIStates, { TextUIStatesStore } from './StageStates/UIStates/TextUIStates/text_ui_states';
export interface States {
    ui: TextUIStatesStore,
    stage: StageStatesStore,
    settings: SettingsStatesStore
}

export interface StatesStore extends States {

}

export function States(): StatesStore {
    const uiStatesStore = useStore(TextUIStates)
    const stageStatesStore = useStore(StageStates)
    const settingStatesStore = useStore(SettingsStates)
    return {
        ui: uiStatesStore,
        stage: stageStatesStore,
        settings: settingStatesStore
    }
}
