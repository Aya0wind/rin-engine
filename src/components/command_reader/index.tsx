import { SayCommand } from '../../controller/commands/say';
import { States } from '../../controller/states/index';

import { useEffect, useState } from 'react';
import { SettingsStates } from '../../controller/states/settings_states';
import { UIStates } from '../../controller/states/ui_states';
import { useStore } from "reto"
import { StageStates } from '../../controller/states/stage_states';
import { invoke } from '@tauri-apps/api';
import { Command, CommandType } from '../../controller/commands';
import { Say } from '../../controller/commands/say';
import { emit, listen } from '@tauri-apps/api/event';
import { ControllerProps } from '../../types/props';


function dispatch(cmd: Command, states: States): unknown {
    console.log(cmd);
    switch (cmd.type) {
        case CommandType.Say:
            return Say(states.uiStates, cmd as SayCommand)
    }
}


async function getNextCommands(last_response: any): Promise<any[]> {
    let result: any = await invoke('next_command', { response: JSON.stringify(last_response) })
    return JSON.parse(result)
}

let last_response = []


const Controller = ({ response }: ControllerProps) => {
    const ui = useStore(UIStates)
    const stage = useStore(StageStates)
    const setting = useStore(SettingsStates)
    const [isStop, setStop] = useState(false)
    useEffect(() => {
        getNextCommands(last_response).then((command) => {
            command.filter((x) => x !== null).map((cmd) => {
                return dispatch(cmd as Command, {
                    uiStates: ui,
                    stageStates: stage,
                    settingsStates: setting
                });
            })
        });
    }, [response])
    return <></>
}

export default Controller
