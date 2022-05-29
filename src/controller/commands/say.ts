import { Command } from "."
import { getLocalAsset } from "../asset_loader"
import { UIStatesStore } from "../states/ui_states"


export interface SayCommand extends Command {
    name: string,
    text: string,
    voice?: string,
}


export function Say(uiStates: UIStatesStore, args: SayCommand) {
    uiStates.setText(args.text)
    uiStates.setName(args.name)
}

