import { convertFileSrc } from '@tauri-apps/api/tauri';


export function getLocalAsset(path: string): string {
    return convertFileSrc(path)
}
