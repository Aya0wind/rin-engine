import { useEffect, useState } from "react";
import { useStore } from "reto";
import BackGround from "../layers/background";
import Figures from "../layers/figures";
import UI from "../layers/ui";
import { AppRenderProps } from "../types/props";
import { States } from "../states";
import { nextCommand } from "../util/contoller";
import styles from './index.module.scss';
import {
    BrowserRouter,
    Route,
    Routes,
    useParams
} from "react-router-dom";
const AppRender = ({ }: AppRenderProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const states = useStore(States)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        })
    }, [])
    const figures = <Figures images={[
        //getLocalAsset('figure/n3.png')
    ]}
        activeIndexes={[]}
        width={windowWidth - 36}
        height={windowHeight * 0.7}
    />

    return (
        <div className={styles.AppRender}>
            <BrowserRouter>
                <Routes>
                    <Route path='/game' element={figures} />
                    <Route path='/' element={null} />
                </Routes>
                < UI />
            </BrowserRouter>
            <BackGround width={windowWidth} height={windowHeight} />
        </div>
    );
};

export default AppRender
