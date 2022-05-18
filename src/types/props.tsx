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


export interface FigureContainerProps {
    images: string[],
    activeIndexes: number[],
    width: number,
    height: number
}

export interface FigureProps {
    image: string,
    active: boolean,
    leftPosition: number
}
export interface BackGroundProps {
    width: number
    height: number
}

export interface CharacterInfoProps {
    avatar: string,
    name: string,
}

export interface TextBoxProps extends CharacterInfoProps {
    text: string,
    speed: number,
    endIcon: ReactNode,
    isOver: boolean
    onOver?: () => void,
}
