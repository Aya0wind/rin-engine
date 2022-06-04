import { invoke } from '@tauri-apps/api';
import { States } from '../../states/index';
import { Map } from '../commands';

interface Command {
    type: string
}


export function dispatch(cmd: Command, states: States): unknown {
    console.log(cmd);

    const target = Map[cmd.type]
    if (target !== null) {
        return target(states, cmd)
    }
}


async function getNextCommands(last_response: any): Promise<any[]> {
    let result: any = await invoke('next_command', { response: JSON.stringify(last_response) })
    return JSON.parse(result)
}

let last_response = []

export function nextCommand(states: States) {
    getNextCommands(last_response).then((command) => {
        last_response = command.filter((x) => x !== null).map((cmd) => {
            return dispatch(cmd as Command, states)
        })
    });
}

