import { ReactNode } from "react"

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
}

export interface ClickAreaProps {
    onClick?: () => void,
}

export interface TextBoxProps extends CharacterInfoProps {
    text: string,
    speed: number,
    endIcon: ReactNode,
    isOver: boolean
    onOver?: () => void,
    name: string,
}

export interface AudioPlayerProps {
    music: string,
    isPlaying: boolean,
}

export interface BottomUIProps extends TextBoxProps {
    avatar: string,
    name: string,
}

export interface CharacterNameProps {
    name: string
}


export interface UIProps {
    onSayOver?: () => void
}
