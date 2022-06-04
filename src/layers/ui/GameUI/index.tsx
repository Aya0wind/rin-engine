import ButtonGroup from '../../../components/ui/FunctionButtonGroup'
import CharacterName from '../../../components/ui/ChracterName'
import TextBox from '../../../components/ui/TextBox'
import { BottomUIProps, GameUIProps } from '../../../types/props'
import styles from './index.module.scss'
import { useEffect } from 'react'
import { useStore } from 'reto'
import { States } from '../../../states'
import { nextCommand } from '../../../util/contoller'
import ClickArea from '../../../components/ui/ClickArea'
import { UIStates } from '../../../states/StageStates/UIStates'
import TextUIStates from '../../../states/StageStates/UIStates/TextUIStates/text_ui_states'
import { SettingsStates } from '../../../states/SettingStates'


const GameUI = ({ }: GameUIProps) => {
    const textUI = useStore(TextUIStates)
    const settings = useStore(SettingsStates)
    return (
        <div>
            <ClickArea />
            <div className={styles.BottomUI}>
                <CharacterName name={textUI.name} />
                <TextBox
                    text={textUI.text}
                    speed={settings.textSpeed}
                    endIcon={textUI.endIcon}
                    isOver={textUI.isPerformOver}
                    onOver={() => textUI.setPerformOver(true)}
                    avatar={textUI.avatar}
                />
                <ButtonGroup />
            </div>
        </div>
    )
}

export default GameUI
