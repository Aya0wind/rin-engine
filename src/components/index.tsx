import { useEffect, useState } from "react";
import { useStore } from "reto";
import BackGround from "../layers/background";
import { Figures } from "../layers/figures";
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
import { getLocalAsset } from "../util/asset_loader";
import { Stage } from "@inlet/react-pixi";
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

    return (
        <div className={styles.AppRender}>
            <BackGround width={windowWidth} height={windowHeight} />
            <Figures width={windowWidth} height={windowHeight} />
            <BrowserRouter>
                < UI />
            </BrowserRouter>

        </div>
    );
};

export default AppRender
