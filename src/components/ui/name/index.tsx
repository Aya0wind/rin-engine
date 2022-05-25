import { CharacterNameProps } from "../../../types/props"
import styles from './index.module.scss'

const CharacterName = ({ name }: CharacterNameProps) => {
    return (
        <div className={styles.Name}><span>{name}</span></div>
    )
}
export default CharacterName
