import { useCallback, useEffect } from "react";
import { useStore } from "reto";
import { States } from "../../../states";
import { ClickAreaProps } from "../../../types/props";
import { nextCommand } from "../../../util/contoller";
import styles from "./index.module.scss";

const ClickArea = ({ }: ClickAreaProps) => {
    const states = useStore(States)
    const uiStates = states.ui

    const onKeydown = useCallback((e: KeyboardEvent) => {
        if (uiStates.isPerformOver) {
            nextCommand(states)
            uiStates.setPerformOver(false)
        } else {
            uiStates.setPerformOver(true)
        }
    }, [uiStates])

    useEffect(() => {
        nextCommand(states)
    }, [])

    useEffect(() => {

        window.addEventListener('keydown', onKeydown)
        return () => {
            window.removeEventListener('keydown', onKeydown)
        }
    }, [uiStates])

    const onUiClick = useCallback(() => {
        if (uiStates.isPerformOver) {
            nextCommand(states)
            uiStates.setPerformOver(false)
        } else {
            uiStates.setPerformOver(true)
        }
    }, [uiStates])
    return (
        <div onClick={onUiClick} className={styles.ClickArea}>
        </div>
    )
}
export default ClickArea
