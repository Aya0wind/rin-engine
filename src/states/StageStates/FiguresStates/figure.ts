import { Dispatch, useState } from "react"
import { getLocalAsset } from "../../../util/asset_loader";

export interface FigureStates {
    basePosition: 'middle' | 'left' | 'right' | 'top' | 'bottom',
    offset: [number, number],
    scale: number,
    source: string,
}


export interface FigureStatesStore extends FigureStates {
    setBasePosition: Dispatch<React.SetStateAction<'middle' | 'left' | 'right' | 'top' | 'bottom'>>;
    setOffset: Dispatch<React.SetStateAction<[number, number]>>;
    setScale: Dispatch<React.SetStateAction<number>>;
    setSource: Dispatch<React.SetStateAction<string>>;
}

const figure: FigureStates = {
    basePosition: "middle",
    offset: [0, 0],
    scale: 0.4,
    source: getLocalAsset('figure/k1.png')
}


export function FigureStates(initial: FigureStates = figure): FigureStatesStore {
    const [basePosition, setBasePosition] = useState<'middle' | 'left' | 'right' | 'top' | 'bottom'>(initial.basePosition)
    const [offset, setOffset] = useState<[number, number]>(initial.offset)
    const [scale, setScale] = useState<number>(initial.scale)
    const [source, setSource] = useState<string>(initial.source)
    return {
        basePosition,
        offset,
        scale,
        source,
        setBasePosition,
        setOffset,
        setScale,
        setSource
    }
}
