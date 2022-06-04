import { FunctionButtonProps } from "../../../types/props"
import styles from "./index.module.scss";

const OptionButton = ({ name, onClick }: FunctionButtonProps) => {
    return (
        <div onClick={onClick ? onClick : null} className={`${styles['custom-btn']} ${styles['btn-5']}`}>
            {name}
        </div>
    )
}
export default OptionButton
