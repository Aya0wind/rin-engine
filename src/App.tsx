import { useState } from "react";
import { AppRenderProps } from "./types/props";
import styles from './App.module.scss'
import { window as tarWindow } from "@tauri-apps/api";
import UI from "./layers/ui";
import { eventBus } from "./components/events";
import FigureContainer from "./layers/character/container";
import BackGround from "./layers/background";


const AppRender = ({ }: AppRenderProps) => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  window.addEventListener('resize', () => {
    setWindowWidth(window.innerWidth)
    setWindowHeight(window.innerHeight)
  })
  return (
    <div className={styles.App}>
      <UI />
      <FigureContainer images={[
        'assets/figure/m1.png',
        'assets/figure/k1.png',
      ]}
        activeIndex={1}
        width={windowWidth - 36}
        height={550 + 4}
      />
      <BackGround width={windowWidth} height={windowHeight} />
    </div>
  );
};

export default AppRender
