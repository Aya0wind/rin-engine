import { getLocalAsset } from "../asset_loader"
import { States } from "../states"
import { UIStatesStore } from "../states/ui_states"


export interface SayCommand {
    name: string,
    text: string,
    voice?: string,
}



export function Say({ uiStatesStore }: States, args: SayCommand) {
    uiStatesStore.setText(args.text)
    uiStatesStore.setName(args.name)
}

