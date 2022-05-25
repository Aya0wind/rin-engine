import { useState } from "react"
import { useStore } from "reto"

export interface SettingsStates {
    mainVolume: number,
    effectVolume: number,
    voiceVolume: number,
    backGroundMusicVolume: number,
    backGroundMusicVolumeOnVoice: number,
    textSpeed: number,
    autoTextSpeed: number,
    autoWaitTime: number,
    textSize: number,
    textOpacity: number,
    autoModeWaitVoiceOver: boolean,
}

export interface SettingsStatesStore extends SettingsStates {
    setMainVolume: React.Dispatch<React.SetStateAction<number>>,
    setEffectVolume: React.Dispatch<React.SetStateAction<number>>,
    setVoiceVolume: React.Dispatch<React.SetStateAction<number>>,
    setBackGroundMusicVolume: React.Dispatch<React.SetStateAction<number>>,
    setBackGroundMusicVolumeOnVoice: React.Dispatch<React.SetStateAction<number>>,
    setAutoTextSpeed: React.Dispatch<React.SetStateAction<number>>,
    setAutoWaitTime: React.Dispatch<React.SetStateAction<number>>,
    setTextSize: React.Dispatch<React.SetStateAction<number>>,
    setTextOpacity: React.Dispatch<React.SetStateAction<number>>,
    setAutoModeWaitVoiceOver: React.Dispatch<React.SetStateAction<boolean>>,
}


export function SettingsStates(): SettingsStatesStore {
    const [mainVolume, setMainVolume] = useState(30)
    const [effectVolume, setEffectVolume] = useState(30)
    const [voiceVolume, setVoiceVolume] = useState(30)
    const [backGroundMusicVolume, setBackGroundMusicVolume] = useState(30)
    const [backGroundMusicVolumeOnVoice, setBackGroundMusicVolumeOnVoice] = useState(30)
    const [textSpeed, seTextSpeed] = useState(30)
    const [autoTextSpeed, setAutoTextSpeed] = useState(30)
    const [autoWaitTime, setAutoWaitTime] = useState(30)
    const [textSize, setTextSize] = useState(30)
    const [textOpacity, setTextOpacity] = useState(0.5)
    const [autoModeWaitVoiceOver, setAutoModeWaitVoiceOver] = useState(false)

    return {
        mainVolume,
        setMainVolume,
        effectVolume,
        setEffectVolume,
        voiceVolume,
        setVoiceVolume,
        backGroundMusicVolume,
        setBackGroundMusicVolume,
        backGroundMusicVolumeOnVoice,
        setBackGroundMusicVolumeOnVoice,
        textSpeed,
        autoTextSpeed,
        setAutoTextSpeed,
        autoWaitTime,
        setAutoWaitTime,
        textSize,
        setTextSize,
        textOpacity,
        setTextOpacity,
        autoModeWaitVoiceOver,
        setAutoModeWaitVoiceOver,
    }
}
