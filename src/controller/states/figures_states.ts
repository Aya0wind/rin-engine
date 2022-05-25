import { useState } from "react"
import { useStore } from "reto"

export interface FiguresStatesProps {
    backGroundMusic: string,
    setBackGroundMusic: React.Dispatch<React.SetStateAction<string>>,
    backGroundMusicPlaying: boolean,
    setBackGroundMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>
}



export function FiguresStates(): FiguresStatesProps {
    const [backGroundMusic, setBackGroundMusic] = useState('')
    const [backGroundMusicPlaying, setBackGroundMusicPlaying] = useState(false)
    return {
        backGroundMusic,
        setBackGroundMusic,
        backGroundMusicPlaying,
        setBackGroundMusicPlaying
    }
}
