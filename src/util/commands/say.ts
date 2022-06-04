import { getLocalAsset } from "../asset_loader"
import { States } from "../../states"


export interface SayCommand {
    name: string,
    text: string,
    voice?: string,
}



export function Say({ ui: uiStatesStore }: States, args: SayCommand) {
    uiStatesStore.setText(args.text)
    uiStatesStore.setName(args.name)
}

