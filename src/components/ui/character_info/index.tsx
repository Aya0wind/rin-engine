import { CharacterInfoProps } from '../../../types/props';
import styles from './index.module.scss'


const CharacterInfo = ({ avatar }: CharacterInfoProps) => {
    return (
        <div className={styles.CharacterInfoContainer}>
            <img src={avatar} />
        </div>

    )
}

export default CharacterInfo
