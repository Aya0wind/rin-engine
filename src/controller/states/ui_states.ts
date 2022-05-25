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
    const [text, setText] = useState('这就是我想看到的舞台！哇卡里马死！')
    const [name, setName] = useState('萝莉泡泡')
    const [avatar, setAvatar] = useState('https://img1.baidu.com/it/u=2838359103,4082675852&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500')
    const [endIcon, setEndIcon] = useState('')
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
