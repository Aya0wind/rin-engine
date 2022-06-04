import { States } from '../../states';

export interface BGComand {
    picture: string
}


export function BG({ stage }: States, args: BGComand) {
    stage.backGround.setImage(args.picture)
}

