
import { useEffect, useState } from 'react'
import ButtonGroup from '../../../components/ui/buttonGroup'
import FunctionButton from '../../../components/ui/function_button'
import TextBox from '../../../components/ui/textbox'
import styles from './index.module.scss'


const BottomUI = () => {
    const [text, setText] = useState(
        ['それが虚無ならば虚無自身がこのとほりで，ある程度まではみんなに共通いたします.'])
    const [index, setIndex] = useState(0)
    const [isOver, setIsOver] = useState(false)
    return (
        <div className={styles.BottomUI} onClick={() => {
            if (isOver) {
                setIsOver(false)
                setIndex((i) => {
                    if (i === text.length - 1) {
                        return 0
                    } else {
                        return i + 1
                    }
                })
            } else {
                setIsOver(true)
            }
        }}>
            <TextBox
                text={text[index]}
                speed={100}
                endIcon={''}
                isOver={isOver}
            />
            <ButtonGroup />
        </div>
    )
}

export default BottomUI
