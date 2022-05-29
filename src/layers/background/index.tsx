import { Sprite, Stage } from "@inlet/react-pixi"
import { convertFileSrc } from "@tauri-apps/api/tauri"
import { BackGroundProps } from "../../types/props"

import styles from './index.module.scss'

const BackGround = ({ width, height }: BackGroundProps) => {
    return (
        <>
            <Stage className={styles.BackGroundLayer} width={width} height={height}
                options={{ antialias: true, backgroundAlpha: 0 }}>
                {/* <Sprite
                    width={width}
                    height={height}
                    image={convertFileSrc('/Users/li/vscodeprj/rin-engine/src-tauri/resource/background/c1.jpg')}
                    x={0}
                    y={0}
                /> */}
            </Stage>
        </>)

}
export default BackGround
