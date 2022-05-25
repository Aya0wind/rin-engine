import { useState } from "react"

export interface StageStatesProps {
    backGroundMusic: string,
    setBackGroundMusic: React.Dispatch<React.SetStateAction<string>>,
    backGroundMusicPlaying: boolean,
    setBackGroundMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>
}



export function StageStates(): StageStatesProps {
    const [backGroundMusic, setBackGroundMusic] = useState('')
    const [backGroundMusicPlaying, setBackGroundMusicPlaying] = useState(false)
    return {
        backGroundMusic,
        setBackGroundMusic,
        backGroundMusicPlaying,
        setBackGroundMusicPlaying
    }
}
