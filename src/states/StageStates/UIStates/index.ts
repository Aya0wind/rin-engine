import { useState } from 'react'
import { useStore } from 'reto'
import TextUIStates, { TextUIStatesStore } from './TextUIStates/text_ui_states'

export interface UIStates {
    textUI: TextUIStatesStore
}


export interface UIStatesStore extends UIStates {

}


export function UIStates(): UIStatesStore {
    const textUIStatesStore = useStore(TextUIStates)
    return {
        textUI: textUIStatesStore
    }
}

