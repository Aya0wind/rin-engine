import { Sprite, Stage } from "@inlet/react-pixi"
import { ReactNode, useEffect, useRef, useState } from "react"
import { FigureContainerProps } from "../../../types/props"
import * as PIXI from 'pixi.js'
import styles from './index.module.scss'


const brightnessFilterCreator = () => {
    const filter = new PIXI.filters.ColorMatrixFilter()
    filter.brightness(0.25, false)
    return filter
}

const brightnessFilter = brightnessFilterCreator()


const FigureContainer = ({ images, activeIndex, width, height }: FigureContainerProps) => {
    return (
        <div className={styles.FigureContainer}>
            <Stage className={styles.FigureContainerDrawer} width={width} height={height} options={{ antialias: true, backgroundAlpha: 0 }}>
                {
                    images.map((e, i) => {
                        const isActive = i === activeIndex ? true : false
                        return <Sprite
                            key={i}
                            scale={0.5}
                            filters={isActive ? [brightnessFilter] : []}
                            image={e}
                            anchor={0.5}
                            x={width / (images.length + 2) + i * (width / 2)}
                            y={height / 2}
                        />
                    })
                }
            </Stage>
        </div>
    )
}
export default FigureContainer
