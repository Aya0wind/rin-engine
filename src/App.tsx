import { AppProvider, Container, Sprite, Stage, useApp } from "@inlet/react-pixi";
import { useState } from "react";
import Rotate from "./components/render/rotate";
import { AppRenderProps } from "./types/props";
import styles from './App.module.scss'
import { invoke, window as tarWindow } from "@tauri-apps/api";
import UI from "./layers/ui";
import RainEffect from "./effects/rain";
import { Application } from "pixi.js";
import { eventBus } from "./components/events";

tarWindow.appWindow.setResizable(false)

const AppRender = ({ }: AppRenderProps) => {
  const [chracter, setchracter] = useState(0)
  useState(() => {
    eventBus.on('start_clicked', () => {
      setchracter((rotation) => rotation + 0.05)
    })
  })
  return (
    <div className={styles.App}>
      <UI />
      <Stage className={styles.BackGroundStage} width={window.innerWidth} height={window.innerHeight} options={{ antialias: true, backgroundAlpha: 0 }}>
        <Rotate />
        {/* <RainEffect rainSpeed={5} number={10} /> */}
      </Stage>
      <Stage className={styles.CharacterStage} width={window.innerWidth} height={window.innerHeight} options={{ antialias: true, backgroundAlpha: 0 }}>
        <Sprite
          image={'https://img2.baidu.com/it/u=144029238,3805998754&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=749'}
          width={200}
          height={400}
          anchor={0.5}
          rotation={chracter}
          x={window.innerWidth * 0.75}
          y={window.innerHeight / 2}
        >
        </Sprite>
        {/* <RainEffect rainSpeed={5} number={10} /> */}
      </Stage>
    </div>
  );
};

export default AppRender
