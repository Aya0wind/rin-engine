import { UIStatesStore } from './states/ui_states';

export interface Args {
    text: string,
    name: string,
    avatar?: string
}



export function Say(uiStates: UIStatesStore, args: Args) {
    uiStates.setText(args.text)
    uiStates.setAvatar(args.avatar)
    uiStates.setName(args.name)
}

