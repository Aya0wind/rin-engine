export enum CommandType {
    Say = 'Say',
    SetBackGroundMusic = 'SetBackGroundMusic',
    PlaySound = 'SaPlaySoundy',
    LoadScene = 'LoadScene',
}


export interface Command {
    type: CommandType
}

