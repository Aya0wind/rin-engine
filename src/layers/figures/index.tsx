
import Figure from '../../components/render/figure'
import { FigureContainerProps } from '../../types/props'
import styles from './index.module.scss'

const Figures = ({ images, activeIndexes, width, height }: FigureContainerProps) => {
    const diff = width / images.length
    return (
        <div className={styles.Figures}>
            {
                images.map((e, i) => {
                    const isActive = activeIndexes.includes(i) ? true : false
                    return <Figure
                        key={i}
                        leftPosition={i * 200}
                        image={e}
                        active={isActive}
                    />
                })
            }
        </div>
    )
}
export default Figures
