import { useState } from "react"

export interface StageStates {
    backGroundMusic: string,
    backGroundMusicPlaying: boolean,
}
export interface StageStatesStore extends StageStates {
    setBackGroundMusic: React.Dispatch<React.SetStateAction<string>>,
    setBackGroundMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>
}


export function StageStates(): StageStatesStore {
    const [backGroundMusic, setBackGroundMusic] = useState('')
    const [backGroundMusicPlaying, setBackGroundMusicPlaying] = useState(false)
    return {
        backGroundMusic,
        setBackGroundMusic,
        backGroundMusicPlaying,
        setBackGroundMusicPlaying
    }
}
