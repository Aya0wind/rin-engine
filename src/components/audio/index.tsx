import { useEffect, useRef, useState } from "react"
import { AudioPlayerProps } from "../../types/props"

const AudioPlayer = ({ music, isPlaying }: AudioPlayerProps) => {

    const audioRef = useRef<HTMLAudioElement>(null);
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
        } else {
            audioRef.current.pause()
        }
    }, [isPlaying])
    return (
        <audio ref={audioRef} id="audio-player" src={music}></audio>
    )
}

export default AudioPlayer
