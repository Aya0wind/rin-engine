import { FunctionButtonProps } from "../../../types/props"
import styles from "./index.module.scss";

const OptionButton = ({ name, onClick }: FunctionButtonProps) => {
    return (
        <div onClick={onClick ? onClick : null} className={styles.OptionButton}>
            {name}
        </div>
    )
}
export default OptionButton
