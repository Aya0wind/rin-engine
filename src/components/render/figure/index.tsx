import { FigureProps } from "../../../types/props"
import styles from './index.module.scss'


const Figure = ({ image, active, leftPosition }: FigureProps) => {
    const style = active ? 'brightness(0.2)' : 'brightness(1)'
    return (
        <img className={styles.morph} style={{ filter: style }} src={image} />
    )
}
export default Figure
