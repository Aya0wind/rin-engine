import {
    MouseEventHandler,
    ReactNode
}

    from "react"

export interface AppRenderProps { }


export interface FunctionButtonProps {
    name: string,
    onClick?: (event: React.MouseEvent) => void
}

export interface RainEffectProps {
    rainSpeed: number,
    number: number
}

export interface TextBoxProps {
    text: string,
    speed: number,
    endIcon: ReactNode,
    isOver: boolean
    onOver?: () => void,
}

export interface FigureContainerProps {
    images: string[],
    activeIndex: number,
    width: number,
    height: number
}

export interface FigureProps {
    image: string,
    active: boolean,
}
export interface BackGroundProps {
    width: number
    height: number
}
