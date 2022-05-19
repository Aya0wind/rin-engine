
import { useEffect, useState } from 'react'
import { useStore } from 'reto'
import { eventBus } from '../../../components/events'
import { StageStates } from '../../../components/states/stage_states'
import UIStates from '../../../components/states/ui_states'
import ButtonGroup from '../../../components/ui/buttonGroup'
import FunctionButton from '../../../components/ui/function_button'
import TextBox from '../../../components/ui/textbox'
import { BottomUIProps } from '../../../types/props'
import styles from './index.module.scss'


const BottomUI = ({ text, name, endIcon, isOver, onOver, avatar }: BottomUIProps) => {
    return (
        <div className={styles.BottomUI}>
            <TextBox
                text={text}
                speed={50}
                endIcon={endIcon}
                isOver={isOver}
                onOver={onOver}
                avatar={avatar}
                name={name}
            />
            <ButtonGroup />
        </div>
    )
}

export default BottomUI
