import { Dispatch, useState } from "react"
import { useStore } from "reto"
import { getLocalAsset } from "../../../util/asset_loader"
import { FigureStates, FigureStatesStore } from "./figure"


interface FigureMap {
    [key: string]: FigureStatesStore
}


export interface FiguresStates {
    figures: FigureMap
}


export interface FiguresStatesStore extends FiguresStates {
    setFigures: Dispatch<React.SetStateAction<FigureMap>>;
}




export function FiguresStates(): FiguresStatesStore {
    const [figures, setFigures] = useState<FigureMap>({
        aaa: FigureStates()
    })
    return {
        figures,
        setFigures
    }
}
