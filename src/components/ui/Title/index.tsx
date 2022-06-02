import { FunctionButtonProps } from "../../../types/props"
import styles from "./index.module.scss";

const Title = ({ name }: FunctionButtonProps) => {
    return (
        <div className={styles.Title}>
            {name}
        </div>
    )
}
export default Title
