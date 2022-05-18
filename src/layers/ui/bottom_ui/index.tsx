
import { useEffect, useState } from 'react'
import { eventBus } from '../../../components/events'
import ButtonGroup from '../../../components/ui/buttonGroup'
import FunctionButton from '../../../components/ui/function_button'
import TextBox from '../../../components/ui/textbox'
import styles from './index.module.scss'


const BottomUI = () => {
    const [text, setText] = useState(
        ['111111111111111111111111', '22222222222222222222222222222222', '3333333333', '444444444', '5555555555'])
    const [index, setIndex] = useState(0)
    const [isOver, setIsOver] = useState(false)

    const onUserClick = () => {
        console.log('next')
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
    }
    useState(() => eventBus.addListener('ui_click', onUserClick))
    return (
        <div className={styles.BottomUI}>
            <TextBox
                text={text[index]}
                speed={50}
                endIcon={''}
                isOver={isOver}
                onOver={() => setIsOver(true)}
                avatar={'https://img2.baidu.com/it/u=1993057335,1496702829&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500'}
                name={'名字'}
            />
            <ButtonGroup />
        </div>
    )
}

export default BottomUI
