import { useState } from "react"

export interface StageStates {
    backGroundMusic: string,
    backGroundMusicPlaying: boolean,
    backGround: string,
}
export interface StageStatesStore extends StageStates {
    setBackGroundMusic: React.Dispatch<React.SetStateAction<string>>,
    setBackGroundMusicPlaying: React.Dispatch<React.SetStateAction<boolean>>
    setBackGround: React.Dispatch<React.SetStateAction<string>>,
}


export function StageStates(): StageStatesStore {
    const [backGroundMusic, setBackGroundMusic] = useState('')
    const [backGroundMusicPlaying, setBackGroundMusicPlaying] = useState(false)
    const [backGround, setBackGround] = useState('')
    return {
        backGroundMusic,
        setBackGroundMusic,
        backGroundMusicPlaying,
        setBackGroundMusicPlaying,
        backGround,
        setBackGround
    }
}
