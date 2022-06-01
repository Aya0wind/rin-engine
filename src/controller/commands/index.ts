export enum CommandType {
    Say = 'Say',
    SetBackGroundMusic = 'BGM',
    PlaySound = 'PlaySound',
    LoadScene = 'LoadScene',
    BG = 'BG',
    Avatar = 'Avatar'
}


export interface Command {
    type: CommandType
}

