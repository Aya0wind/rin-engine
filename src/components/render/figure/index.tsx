import { Sprite } from "@inlet/react-pixi"
import { CSSProperties } from "react"
import { FigureProps } from "../../../types/props"
import styles from './index.module.scss'

function middlePositionStyle(offset: [number, number]): CSSProperties {
    return {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: 1,
        maxHeight: 1,
        position: 'absolute',
        overflow: 'visible',
        top: `50% + ${offset[1]} `,
        left: `50% + ${offset[0]} `,
        transform: 'translate(-50%, -50%)'
    }
}




const Figure = ({ source, active, basePosition, scale, offset }: FigureProps) => {
    const style = active ? 'brightness(0.2)' : 'brightness(1)'
    return (
        <div style={middlePositionStyle(offset)}>
            <img src={source} style={{ transform: `scale(${scale})` }} />
        </div>
    )
}
export default Figure
