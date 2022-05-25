import ButtonGroup from '../../../components/ui/buttonGroup'
import CharacterName from '../../../components/ui/name'
import TextBox from '../../../components/ui/textbox'
import { BottomUIProps } from '../../../types/props'
import styles from './index.module.scss'


const BottomUI = ({ text, name, endIcon, isOver, onOver, avatar, speed }: BottomUIProps) => {
    return (
        <div className={styles.BottomUI}>
            <CharacterName name={name} />
            <TextBox
                text={text}
                speed={speed}
                endIcon={endIcon}
                isOver={isOver}
                onOver={onOver}
                avatar={avatar}
                name={name}
            />
            <ButtonGroup />
        </div>
    )
}

export default BottomUI
