import { useStore } from 'reto'
import { SettingsStates } from '../../controller/states/settings_states'
import { StageStates } from '../../controller/states/stage_states'
import UIStates from '../../controller/states/ui_states'
import { UIProps } from '../../types/props'
import BottomUI from './bottom_ui'
import styles from './index.module.scss'


const UI = ({ onSayOver }: UIProps) => {
    const uiStates = useStore(UIStates)
    const settingStates = useStore(SettingsStates)
    return (
        <div className={styles.UI}>
            <BottomUI
                avatar={uiStates.avatar}
                text={uiStates.text}
                speed={settingStates.textSpeed}
                endIcon={uiStates.endIcon}
                isOver={uiStates.isPerformOver}
                name={uiStates.name}
                onOver={onSayOver}
            />
        </div>
    )
}

export default UI
