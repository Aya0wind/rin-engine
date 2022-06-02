import { FunctionButtonProps } from "../../../types/props"
import styles from "./index.module.scss";

const FunctionButton = ({ name, onClick }: FunctionButtonProps) => {
    return (
        <div>
            <span onClick={onClick ? onClick : null} className={styles.FunctionButton}>
                {name}
            </span>
        </div>
    )
}
export default FunctionButton
