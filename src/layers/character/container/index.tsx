import { Sprite, Stage } from "@inlet/react-pixi"
import { ReactNode, useEffect, useRef, useState } from "react"
import { FigureContainerProps } from "../../../types/props"
import styles from './index.module.scss'
import Figure from "../figure"



const FigureContainer = ({ images, activeIndexes, width, height }: FigureContainerProps) => {
    const diff = width / images.length
    return (
        <div className={styles.FigureContainer}>
            {
                images.map((e, i) => {
                    const isActive = activeIndexes.includes(i) ? true : false
                    return <Figure
                        key={i}
                        leftPosition={i * 200}
                        image={e} active={isActive}
                    />
                })
            }
        </div>
    )
}
export default FigureContainer
