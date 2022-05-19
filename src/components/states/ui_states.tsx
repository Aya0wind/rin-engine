import { useState } from 'react'
import { useStore } from 'reto'


interface UIStatesProps {
    text: string,
    name: string,
    avatar: string,
    endIcon: string,
    isPerformOver: boolean,
}



export function UIStates() {
    const [text, setText] = useState('')
    const [name, setName] = useState('名字')
    const [avatar, setAvatar] = useState('https://img2.baidu.com/it/u=2899760465,3893834244&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=500')
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
