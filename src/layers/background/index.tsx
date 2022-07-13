import { Sprite, Stage } from "@inlet/react-pixi"
import { convertFileSrc } from "@tauri-apps/api/tauri"
import { useStore } from "reto"
import { getLocalAsset } from "../../util/asset_loader"
import { StageStates } from "../../states/StageStates"
import { BackGroundProps } from "../../types/props"

import styles from './index.module.scss'
import { BackGroundStates } from "../../states/StageStates/BackGroundStates"

const BackGround = ({ width, height }: BackGroundProps) => {
    const backGroud = useStore(BackGroundStates)
    return (
        <Stage className={styles.BackGroundLayer} width={width} height={height}>
            {
                backGroud.image !== null ?
                    <Sprite
                        width={width}
                        height={height}
                        image={getLocalAsset(backGroud.image)}
                        x={0}
                        y={0}
                    /> : null
            }
        </Stage>)

}
export default BackGround
