import ButtonGroup from '../../../components/ui/FunctionButtonGroup'
import CharacterName from '../../../components/ui/ChracterName'
import TextBox from '../../../components/ui/TextBox'
import { MainUIProps } from '../../../types/props'
import styles from './index.module.scss'
import OptionButton from '../../../components/ui/OptionButton'
import Title from '../../../components/ui/Title'
import OptionButtonGroup from '../../../components/ui/OptionButtonGroup'


const MainUI = ({ }: MainUIProps) => {
    return (
        <div className={styles.MainUI}>
            <div className={styles.MainMenu}>
                <Title name='标题'></Title>
                <OptionButtonGroup />
            </div>
        </div>
    )
}

export default MainUI
