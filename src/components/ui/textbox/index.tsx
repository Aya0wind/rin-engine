import { useState } from 'react';
import styles from './index.module.scss'


const TextBox = () => {
    const text = '这是一段文字';

    const [show, setshow] = useState('');
    let counter = 0
    useState(() => {
        let timer = setInterval(() => {
            if (counter === text.length) {
                clearInterval(timer)
                return
            }
            setshow((show) => show + text[counter])
            counter += 1;
        }, 100)
    })
    return (
        <div className={styles.MarginContainer}>
            <div className={styles.TextBoxContainer}>
                {show}
            </div>
        </div>
    )
}

export default TextBox
