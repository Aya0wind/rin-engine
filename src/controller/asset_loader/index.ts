import { convertFileSrc } from '@tauri-apps/api/tauri';
export function getLocalAsset(path: string): string {
    return convertFileSrc(`H:/vscodeprj/rin-engine/src-tauri/resource/${path}`)
}
