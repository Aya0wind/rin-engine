import { Sprite, Stage } from "@inlet/react-pixi"
import { convertFileSrc } from "@tauri-apps/api/tauri"
import { useStore } from "reto"
import { getLocalAsset } from "../../util/asset_loader"
import { StageStates } from "../../util/states/stage_states"
import { BackGroundProps } from "../../types/props"

import styles from './index.module.scss'

const BackGround = ({ width, height }: BackGroundProps) => {
    const stageStates = useStore(StageStates)
    console.log(stageStates.backGround);

    return (
        <>
            <Stage className={styles.BackGroundLayer} width={width} height={height}
                options={{ antialias: true, backgroundAlpha: 0 }}>
                {
                    stageStates.backGround !== null ?
                        <Sprite
                            width={width}
                            height={height}
                            image={getLocalAsset(stageStates.backGround)}
                            x={0}
                            y={0}
                        /> : null
                }
            </Stage>
        </>)

}
export default BackGround
