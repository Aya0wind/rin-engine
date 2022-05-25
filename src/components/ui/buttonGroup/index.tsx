import FunctionButton from "../function_button";
import styles from "./index.module.scss";

const ButtonGroup = () => {
    return (
        <div className={styles.ButtonGroup}>
            <FunctionButton name="Save" onClick={() => {

            }}></FunctionButton>
            <FunctionButton name="Load" onClick={() => {

            }}></FunctionButton>
            <FunctionButton name="QSave" onClick={() => {

            }}></FunctionButton>
            <FunctionButton name="QLoad" onClick={() => {

            }}></FunctionButton>
            <FunctionButton name="Settings" onClick={() => {

            }}></FunctionButton>
        </div>
    )
}
export default ButtonGroup
