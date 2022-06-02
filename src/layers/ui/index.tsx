import { useStore } from 'reto'
import BottomUI from './BottomUI'
import styles from './index.module.scss'
import { States } from '../../util/states'
import MainUI from './MainUI'
import ClickArea from '../../components/ui/ClickArea'


const UI = () => {
    const states = useStore(States)
    const uiStates = states.uiStatesStore
    const settingStates = states.settingStatesStore

    return (
        <div className={styles.UI}>
            <ClickArea />
            <BottomUI
                avatar={uiStates.avatar}
                text={uiStates.text}
                speed={settingStates.textSpeed}
                endIcon={uiStates.endIcon}
                isOver={uiStates.isPerformOver}
                name={uiStates.name}
                onOver={() => uiStates.setPerformOver(true)}
            />
            {/* <MainUI /> */}
        </div>
    )
}

export default UI
