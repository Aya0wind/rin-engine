import { useCallback, useEffect, useState } from "react";
import UIStates from "../controller/states/ui_states";
import BackGround from "../layers/background";
import UI from "../layers/ui";
import { AppRenderProps } from "../types/props";
import ClickArea from "./ui/click_area";
import styles from './index.module.scss'
import { useStore } from "reto";
import Figures from "../layers/figures";

const AppRender = ({ }: AppRenderProps) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)

    window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth)
        setWindowHeight(window.innerHeight)
    })
    const uiStates = useStore(UIStates)

    const onUiClick = useCallback(() => {
        if (uiStates.isPerformOver) {
            uiStates.setText((t) => t + '1')
            uiStates.setPerformOver(false)
        } else {
            uiStates.setPerformOver(true)
        }
    }, [uiStates])

    useEffect(() => {
        // async function waitForNextStage() {
        //     await listen('eee', () => { })
        // }
        // waitForNextStage().then()
    }, [])

    return (
        <div className={styles.AppRender}>
            <ClickArea onClick={onUiClick} />
            <UI onSayOver={() => { uiStates.setPerformOver(true) }} />
            <Figures images={[
                // convertFileSrc('/Users/li/vscodeprj/rin-engine/src-tauri/resource/figure/n2.png'),
                // convertFileSrc('/Users/li/vscodeprj/rin-engine/src-tauri/resource/figure/k5.png'),
                // 'https://img1.baidu.com/it/u=2838359103,4082675852&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
            ]}
                activeIndexes={[1]}
                width={windowWidth - 36}
                height={windowHeight * 0.7}
            />
            <BackGround width={windowWidth} height={windowHeight} />
        </div>
    );
};

export default AppRender
