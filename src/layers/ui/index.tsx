import { convertFileSrc } from '@tauri-apps/api/tauri'
import { eventBus } from '../../components/events'
import FigureContainer from '../character/container'
import BottomUI from './bottom_ui'
import styles from './index.module.scss'


const UI = () => {
    return (
        <div className={styles.UI} onClick={() => {
            eventBus.emit('ui_click')
        }}>
            <img src={convertFileSrc('assets/rain_2.png')}></img>
            <BottomUI />
        </div>
    )
}


export default UI
