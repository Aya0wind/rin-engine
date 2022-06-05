import { useStore } from 'reto'
import CharacterName from '../../../components/ui/ChracterName'
import ClickArea from '../../../components/ui/ClickArea'
import ButtonGroup from '../../../components/ui/FunctionButtonGroup'
import TextBox from '../../../components/ui/TextBox'
import { SettingsStates } from '../../../states/SettingStates'
import TextUIStates from '../../../states/UIStates/TextUIStates'
import { GameUIProps } from '../../../types/props'
import styles from './index.module.scss'


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
