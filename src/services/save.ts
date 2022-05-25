export interface GameSettings {
    mainVolume: number,
    vocalVolume: number,
    backgroundMusicVolume: number,
    speed: number,
    auto: boolean,
    language: string,
}


export interface Save {
    stage: string,
    currentIndex: number,
    bgm: string,
    picture: string,
}
