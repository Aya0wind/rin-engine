import { useEffect } from "react";
import { useStore } from "reto";
import { ClickAreaProps } from "../../../types/props";
import { StageStates } from "../../../controller/states/stage_states";
import styles from "./index.module.scss";

const ClickArea = ({ onClick }: ClickAreaProps) => {

    return (
        <div onClick={() => onClick()} className={styles.ClickArea}>
        </div>
    )
}
export default ClickArea
