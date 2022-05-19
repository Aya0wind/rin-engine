import { useState } from "react";
import { AppRenderProps } from "./types/props";
import styles from './App.module.scss'
import UI from "./layers/ui";
import FigureContainer from "./layers/character/container";
import BackGround from "./layers/background";
import { Provider, useStore } from "reto";
import { StageStates } from "./components/states/stage_states";
import UIStates from "./components/states/ui_states";
import ClickArea from "./components/ui/click_area";


const AppRender = ({ }: AppRenderProps) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)

  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  })

  return (
    <div className={styles.App}>
      <Provider of={UIStates} memo>
        <Provider of={StageStates} memo>
          <audio id="audio-player"></audio>
          <ClickArea />
          <UI />
          <FigureContainer images={[
            'https://img1.baidu.com/it/u=2838359103,4082675852&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
            'https://img1.baidu.com/it/u=2838359103,4082675852&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
            'https://img1.baidu.com/it/u=2838359103,4082675852&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
            'https://img1.baidu.com/it/u=2838359103,4082675852&fm=253&fmt=auto&app=120&f=JPEG?w=889&h=500',
          ]}
            activeIndexes={[0, 3]}
            width={windowWidth - 36}
            height={550 + 4}
          />
          <BackGround width={windowWidth} height={windowHeight} />
        </Provider>
      </Provider>
    </div>
  );
};

export default AppRender
