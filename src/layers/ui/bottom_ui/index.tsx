import ButtonGroup from '../../../components/ui/buttonGroup'
import FunctionButton from '../../../components/ui/function_button'
import TextBox from '../../../components/ui/textbox'
import styles from './index.module.scss'


const BottomUI = () => {
    return (
        <div className={styles.BottomUI}>
            <TextBox></TextBox>
            <ButtonGroup name='开始' />
        </div>
    )
}

export default BottomUI
