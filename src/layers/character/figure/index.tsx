import { FigureProps } from "../../../types/props"
import styles from './index.module.scss'


const Figure = ({ image, active }: FigureProps) => {
    const style = active ? 'brightness(0.2)' : 'brightness(1)'
    return (
        <div className={styles.Figure}>
            <img className={styles.Image} style={{ filter: style }} src={image} />
        </div>
    )
}
export default Figure
