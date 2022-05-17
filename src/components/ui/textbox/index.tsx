import { useEffect, useState } from 'react';
import { TextBoxProps } from '../../../types/props';
import styles from './index.module.scss'


const TextBox = ({ text, speed, endIcon, isOver, onOver }: TextBoxProps) => {
    let textElementList;
    if (isOver) {
        textElementList = text.split('').map((e, index) => {
            return <span
                className={styles.TextBoxElementOver}
                key={index}
            >{e}</span>;
        });
    } else {
        textElementList = text.split('').map((e, index) => {
            return <span
                className={styles.TextBoxElement}
                key={index}
                style={isOver ? {} : { animationDelay: String(index * speed) + 'ms' }}
            >{e}</span>;
        });
    }

    //const icon = <span key={text.length + 1}>{endIcon}</span>
    //textElementList.push(icon)
    return (
        < div className={styles.MarginContainer}>
            {textElementList}
        </div>
    )
}

export default TextBox
