import { useStore } from 'reto'
import Figure from '../../components/render/figure'
import { FiguresStates } from '../../states/StageStates/FiguresStates'
import { FigureContainerProps } from '../../types/props'
import styles from './index.module.scss'

const Figures = ({ width, height }: FigureContainerProps) => {
    const states = useStore(FiguresStates)
    return (
        <div className={styles.FigureLayerContainer}>
            {
                Object.values(states.figures).map((e, i) => {
                    //const isActive = activeIndexes.includes(i) ? true : false
                    return <Figure
                        key={i}
                        source={e.source}
                        active={false}
                        basePosition={e.basePosition}
                        offset={e.offset}
                        scale={e.scale} />
                })
            }
        </div>
    )
}
export { Figures }
