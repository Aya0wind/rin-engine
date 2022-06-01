import { useState } from 'react'


export interface UIStates {
    text: string,
    name: string,
    avatar: string,
    endIcon: string,
    isPerformOver: boolean,
}

export interface UIStatesStore extends UIStates {
    setText: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setAvatar: React.Dispatch<React.SetStateAction<string>>,
    setEndIcon: React.Dispatch<React.SetStateAction<string>>,
    setPerformOver: React.Dispatch<React.SetStateAction<boolean>>,
}

export function UIStates(): UIStatesStore {
    const [text, setText] = useState(null)
    const [name, setName] = useState(null)
    const [avatar, setAvatar] = useState(null)
    const [endIcon, setEndIcon] = useState('◀')
    const [isPerformOver, setPerformOver] = useState(false)
    return {
        text,
        name,
        avatar,
        endIcon,
        isPerformOver,
        setText,
        setName,
        setAvatar,
        setEndIcon,
        setPerformOver,
    }
}


export default UIStates
