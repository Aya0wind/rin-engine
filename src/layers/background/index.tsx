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
                    image={'https://img0.baidu.com/it/u=3673331838,1681625713&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}
                    x={0}
                    y={0}
                />
            </Stage>
        </>)

}
export default BackGround
