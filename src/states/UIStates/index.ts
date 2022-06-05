import { useStore } from 'reto'
import TextUIStates, { TextUIStatesStore } from './TextUIStates'

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

