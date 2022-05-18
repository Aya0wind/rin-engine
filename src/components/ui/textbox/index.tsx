import { useEffect, useRef, useState } from 'react';
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
    const icon = <span
        ref={lastElementRef}
        className={isOver ? styles.TextBoxElementOver : styles.TextBoxElement}
        key={text.length + 1}
        style={isOver ? {} : { animationDelay: String((text.length) * speed) + 'ms' }}
    >{endIcon}</span>

    useEffect(() => {
        lastElementRef.current.addEventListener('animationend', () => {
            return onOver == null ? onOver() : null
        })
    })
    textElementList.push(icon)
    return (
        <div className={styles.TextBoxContainer}>
            <CharacterInfo avatar={avatar} name={name} />
            < div className={styles.TextElementContainer}>
                {textElementList}
            </div>
        </div>

    )
}

export default TextBox
