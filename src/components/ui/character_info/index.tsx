import { useEffect, useRef, useState } from 'react';
import { CharacterInfoProps } from '../../../types/props';
import styles from './index.module.scss'


const CharacterInfo = ({ avatar, name }: CharacterInfoProps) => {
    return (
        <div className={styles.CharacterInfoContainer}>
            <div className={styles.CharacterInfo}>
                <img src={avatar} className={styles.CharacterAvatar} />
                <div className={styles.CharacterName}>{name}</div>
            </div>
        </div>

    )
}

export default CharacterInfo
