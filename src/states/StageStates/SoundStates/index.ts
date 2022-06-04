import { useState } from "react"

export interface SoundStates {
    backGroundMusic: string,
    backGroundMusicPlaying: boolean,
}
export interface SoundStatesStore extends SoundStates {
    setBackGroundMusic: React.Dispatch<React.SetStateAction<string>>,
    setBackGroundMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>
}


export function SoundStates(): SoundStatesStore {
    const [backGroundMusic, setBackGroundMusic] = useState(null)
    const [backGroundMusicPlaying, setBackGroundMusicPlaying] = useState(false)
    return {
        backGroundMusic,
        setBackGroundMusic,
        backGroundMusicPlaying,
        setBackGroundMusicPlaying
    }
}
