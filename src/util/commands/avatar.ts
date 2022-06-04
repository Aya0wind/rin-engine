import { States } from '../../states';


export interface AvatarCommand {
    picture: string
}


export function Avatar({ ui }: States, args: AvatarCommand) {
    ui.setAvatar(args.picture)
}

