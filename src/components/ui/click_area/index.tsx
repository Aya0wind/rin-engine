import { MouseEventHandler, useEffect } from "react";
import { useStore } from "reto";
import { ClickAreaProps } from "../../../types/props"
import { StageStates } from "../../states/stage_states";
import styles from "./index.module.scss";

const ClickArea = () => {
    const stageStates = useStore(StageStates)
    const onUiClick = () => {
        if (stageStates.uiStates.isPerformOver) {
            stageStates.uiStates.setPerformOver(false)
            if (stageStates.currentTextIndex === stageStates.texts.length - 1) {
                stageStates.setCurrentTextIndex(0)
            } else {
                stageStates.setCurrentTextIndex((i) => i + 1)
            }
            stageStates.uiStates.setText(stageStates.texts[stageStates.currentTextIndex])
        } else {
            stageStates.uiStates.setPerformOver(true)
        }
    }
    useEffect(() => {
        // document.addEventListener('keypress', (ev) => {
        //     if (ev.key == 'd') {
        //         onUiClick()
        //     }
        // })
        stageStates.uiStates.setText(stageStates.texts[stageStates.currentTextIndex])
    }, [])
    return (
        <div onClick={() => onUiClick()} className={styles.ClickArea}>
        </div>
    )
}
export default ClickArea
