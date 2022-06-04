import { useNavigate } from "react-router-dom";
import FunctionButton from "../FunctionButton";
import OptionButton from "../OptionButton";
import styles from "./index.module.scss";

const OptionButtonGroup = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.ButtonGroup}>
            <OptionButton name="开始游戏" onClick={() => navigate('/game')
            } />
            <OptionButton name="继续游戏" />
            <OptionButton name="CG回想" />
            <OptionButton name="系统设置" />
            <OptionButton name="退出游戏" />
        </div>
    )
}
export default OptionButtonGroup
