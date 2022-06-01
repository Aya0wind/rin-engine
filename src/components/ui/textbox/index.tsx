import { useEffect, useRef } from 'react';
import { TextBoxProps } from '../../../types/props';
import CharacterInfo from '../character_info';
import styles from './index.module.scss'


const TextBox = ({ text, speed, endIcon, isOver, onOver, avatar, name }: TextBoxProps) => {
    let textElementList = text.split('').map((e, index) => {
        return <span
            className={isOver ? styles.TextBoxElementOver : styles.TextBoxElement}
            key={index}
            style={isOver ? {} : { animationDelay: String(index * speed) + 'ms' }}
        >{e}</span>;
    })

    const lastElementRef = useRef<HTMLSpanElement>(null)
    let lastElement = <span
        ref={lastElementRef}
        className={isOver ? styles.TextBoxElementOver : styles.TextBoxElement}
        key={text.length}
        onAnimationEnd={() => onOver === null ? null : onOver()}
        style={isOver ? {} : { animationDelay: String((text.length) * speed) + 'ms' }}
    >{endIcon}</span>;

    textElementList.push(lastElement)
    return (
        <div className={styles.TextBoxContainer}>
            {
                avatar ? <CharacterInfo avatar={avatar} /> : null
            }
            < div className={styles.TextElementContainer}>
                {textElementList}
            </div>
        </div>
    )
}

export default TextBox
