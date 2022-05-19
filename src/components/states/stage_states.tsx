import { useState } from "react"
import { useStore } from "reto"
import { text } from "stream/consumers"
import UIStates from "./ui_states"

export function StageStates() {
    const uiStates = useStore(UIStates)
    const [texts, setTexts] = useState(['1111111', '22222222', '3333333'])
    const [currentTextIndex, setCurrentTextIndex] = useState(0)

    return {
        uiStates,
        currentTextIndex,
        texts,
        setTexts,
        setCurrentTextIndex
    }
}
