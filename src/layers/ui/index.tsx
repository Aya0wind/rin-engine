import { useEffect } from 'react'
import { useStore } from 'reto'
import { StageStates } from '../../components/states/stage_states'
import UIStates from '../../components/states/ui_states'
import { getLocalAsset } from '../../services/assetsLoader'
import BottomUI from './bottom_ui'
import styles from './index.module.scss'


const UI = () => {
    const uiStates = useStore(UIStates)

    return (
        <div className={styles.UI}>
            <BottomUI
                avatar={uiStates.avatar}
                text={uiStates.text}
                speed={50}
                endIcon={uiStates.endIcon}
                isOver={uiStates.isPerformOver}
                name={uiStates.name}
                onOver={() => uiStates.setPerformOver(true)}
            />
        </div>
    )
}


export default UI
