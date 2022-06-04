import { useState } from "react"

export interface BackGroundStates {
    image: string,
}
export interface BackGroundStatesStore extends BackGroundStates {
    setImage: React.Dispatch<React.SetStateAction<string>>,
}


export function BackGroundStates(): BackGroundStatesStore {
    const [image, setImage] = useState(null)
    return {
        image,
        setImage,
    }
}
