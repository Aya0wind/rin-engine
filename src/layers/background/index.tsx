import { Sprite, Stage } from "@inlet/react-pixi"
import { BackGroundProps } from "../../types/props"

import styles from './index.module.scss'
const BackGround = ({ width, height }: BackGroundProps) => {
    return (
        <>
            <Stage className={styles.BackGroundStage} width={width} height={height} options={{ antialias: true, backgroundAlpha: 0 }}>
                <Sprite
                    width={width}
                    height={height}
                    image={'assets/background/c1.jpg'}
                    x={0}
                    y={0}
                />
            </Stage>
        </>)

}
export default BackGround
