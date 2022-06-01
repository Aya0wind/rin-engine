import { useCallback, useEffect, useState } from "react";
import { useStore } from "reto";
import { getLocalAsset } from "../controller/asset_loader";
import UIStates from "../controller/states/ui_states";
import BackGround from "../layers/background";
import Figures from "../layers/figures";
import UI from "../layers/ui";
import { AppRenderProps } from "../types/props";
import Controller from "./command_reader";
import styles from './index.module.scss';
import ClickArea from "./ui/click_area";

const AppRender = ({ }: AppRenderProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        })
    }, [])
    const uiStates = useStore(UIStates)
    const [response, setResponse] = useState(null)
    const onUiClick = useCallback(() => {
        if (uiStates.isPerformOver) {
            setResponse({})
            uiStates.setPerformOver(false)
        } else {
            uiStates.setPerformOver(true)
        }
    }, [uiStates])

    return (
        <div className={styles.AppRender}>
            <Controller response={response} />
            <ClickArea onClick={onUiClick} />
            <UI onSayOver={() => { uiStates.setPerformOver(true); }} />
            <Figures images={[
                getLocalAsset('figure/n3.png')
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
