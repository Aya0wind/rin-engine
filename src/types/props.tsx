import { ReactNode } from "react"
import { FigureStates } from "../states/StageStates/FiguresStates/figure"

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
    width: number,
    height: number
}

export interface FigureProps extends FigureStates {
    active: boolean,
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
}

export interface AudioPlayerProps {
    music: string,
    isPlaying: boolean,
}

export interface BottomUIProps extends TextBoxProps {
    avatar: string,
    name: string,
}
export interface GameUIProps {

}

export interface GalleryUIProps {

}



export interface LoadUIProps {

}



export interface SaveUIProps {

}


export interface StuffUIProps {

}



export interface CharacterNameProps {
    name: string
}


export interface UIProps {
    onSayOver?: () => void
}

export interface ControllerProps {
    awaker: boolean
}

export interface MainUIProps {

}
