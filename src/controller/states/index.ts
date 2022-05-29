import { SettingsStates, SettingsStatesStore } from './settings_states';
import { StageStatesStore } from './stage_states';
import { UIStatesStore } from './ui_states';
export interface States {
    uiStates: UIStatesStore,
    stageStates: StageStatesStore,
    settingsStates: SettingsStatesStore
}


