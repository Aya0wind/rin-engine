import { Route, Routes, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import GalleryUI from './GalleryUI'
import GameUI from './GameUI'
import styles from './index.module.scss'
import LoadUI from './LoadUI'
import MainUI from './MainUI'
import SaveUI from './SaveUI'
import StuffUI from './StuffUI'
const UI = () => {
    const location = useLocation()
    return (
        <div className={styles.UI}>
            <TransitionGroup>
                <CSSTransition key={location.key} timeout={500} classNames="fade">
                    <Routes location={location}>
                        <Route path='/game' element={<GameUI />} />
                        <Route path='/save' element={<SaveUI />} />
                        <Route path='/load' element={<LoadUI />} />
                        <Route path='/stuff' element={<StuffUI />} />
                        <Route path='/gallery' element={<GalleryUI />} />
                        <Route path='/' element={<MainUI />} />
                    </Routes>
                </CSSTransition>
            </TransitionGroup>
        </div>
    )
}

export default UI
