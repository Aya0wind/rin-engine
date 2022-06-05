import { useState } from 'react'


export interface TextUIStates {
    text: string,
    name: string,
    avatar: string,
    endIcon: string,
    isPerformOver: boolean,
}

export interface TextUIStatesStore extends TextUIStates {
    setText: React.Dispatch<React.SetStateAction<string>>,
    setName: React.Dispatch<React.SetStateAction<string>>,
    setAvatar: React.Dispatch<React.SetStateAction<string>>,
    setEndIcon: React.Dispatch<React.SetStateAction<string>>,
    setPerformOver: React.Dispatch<React.SetStateAction<boolean>>,
}

export function TextUIStates(): TextUIStatesStore {
    const [text, setText] = useState('')
    const [name, setName] = useState('')
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


export default TextUIStates
