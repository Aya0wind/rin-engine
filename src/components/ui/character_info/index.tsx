import { getLocalAsset } from '../../../controller/asset_loader';
import { CharacterInfoProps } from '../../../types/props';
import styles from './index.module.scss'


const CharacterInfo = ({ avatar }: CharacterInfoProps) => {
    return (
        <div className={styles.CharacterInfoContainer}>
            <img src={getLocalAsset(avatar)} />
        </div>

    )
}

export default CharacterInfo
