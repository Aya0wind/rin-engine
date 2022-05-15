import { MouseEventHandler } from "react"

export interface AppRenderProps {

}


export interface FunctionButtonProps {
    name: string,
    onClick?: (event: React.MouseEvent) => void
}

export interface RainEffectProps {
    rainSpeed: number,
    number: number
}
