import { States } from '../../util/states/index';
import { useEffect, useState } from 'react';
import { SettingsStates } from '../../util/states/settings_states';
import { UIStates } from '../../util/states/ui_states';
import { useStore } from "reto"
import { StageStates } from '../../util/states/stage_states';
import { invoke } from '@tauri-apps/api';
import { ControllerProps } from '../../types/props';
import { Map } from '../../util/commands';

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

let last_response = {}

export function nextCommand(states: States) {
    getNextCommands(last_response).then((command) => {
        command.filter((x) => x !== null).map((cmd) => {
            last_response = dispatch(cmd as Command, states);
        })
    });
}

const Controller = () => {
    const states = useStore(States)
    useEffect(() => {
        nextCommand(states)
    }, [])
    return <></>
}

export default Controller
