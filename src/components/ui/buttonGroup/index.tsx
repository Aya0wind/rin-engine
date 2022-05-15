import { FunctionButtonProps } from "../../../types/props"
import { eventBus } from "../../events";
import FunctionButton from "../function_button";
import styles from "./index.module.scss";

const ButtonGroup = ({ name, onClick }: FunctionButtonProps) => {
    return (
        <div className={styles.ButtonGroup}>
            <FunctionButton name="开始" onClick={() => { eventBus.emit('start_clicked') }} ></FunctionButton>
            <FunctionButton name="快进" onClick={() => { eventBus.emit('step_clicked') }}></FunctionButton>
            <FunctionButton name="快退" onClick={() => { eventBus.emit('back_clicked') }}></FunctionButton>
            <FunctionButton name="自动" onClick={() => { eventBus.emit('auto_clicked') }}></FunctionButton>
        </div>
    )
}
export default ButtonGroup
