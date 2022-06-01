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
import { ControllerProps } from '../../types/props';
import { BG, BGComand } from '../../controller/commands/bg';
import { Avatar, AvatarCommand } from '../../controller/commands/avatar';


function dispatch(cmd: Command, { settingsStates, uiStates, stageStates }: States): unknown {
    console.log(cmd);

    switch (cmd.type) {
        case CommandType.Say:
            return Say(uiStates, cmd as SayCommand)
        case CommandType.BG:
            return BG(stageStates, cmd as BGComand)
        case CommandType.Avatar:
            return Avatar(uiStates, cmd as AvatarCommand)
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
