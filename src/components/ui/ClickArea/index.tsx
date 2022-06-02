import { useCallback, useEffect } from "react";
import { useStore } from "reto";
import { ClickAreaProps } from "../../../types/props";
import { States } from "../../../util/states";
import { StageStates } from "../../../util/states/stage_states";
import { nextCommand } from "../../contoller";
import styles from "./index.module.scss";

const ClickArea = ({ }: ClickAreaProps) => {
    const states = useStore(States)
    const uiStates = states.uiStatesStore
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
