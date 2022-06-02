import { useCallback, useEffect, useState } from "react";
import { useStore } from "reto";
import { getLocalAsset } from "../util/asset_loader";
import { States } from "../util/states";
import UIStates from "../util/states/ui_states";
import BackGround from "../layers/background";
import Figures from "../layers/figures";
import UI from "../layers/ui";
import { AppRenderProps } from "../types/props";
import Controller, { dispatch, nextCommand } from "./contoller";
import styles from './index.module.scss';
import ClickArea from "./ui/ClickArea";

const AppRender = ({ }: AppRenderProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        })
    }, [])
    return (
        <div className={styles.AppRender}>
            <Controller />
            <UI />
            <Figures images={[
                //getLocalAsset('figure/n3.png')
            ]}
                activeIndexes={[]}
                width={windowWidth - 36}
                height={windowHeight * 0.7}
            />
            <BackGround width={windowWidth} height={windowHeight} />
        </div>
    );
};

export default AppRender
