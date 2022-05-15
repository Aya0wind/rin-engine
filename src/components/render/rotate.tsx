import * as ReactPixi from "@inlet/react-pixi";
import * as ReactDOM from "react-dom";
import { convertFileSrc } from "@tauri-apps/api/tauri";
import React from "react";
import { Graphics as PIXIGraphics } from "pixi.js";
import { eventBus } from "../events";

const { render } = ReactDOM;
const { Stage, Sprite, Container, useTick, Graphics } = ReactPixi;
const { useState } = React;

let i = 0;

const Rotate = () => {

    // states
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    // // // custom ticker
    // useTick(delta => {
    //     i += 0.05 * delta;
    //     setX(Math.sin(i) * 100);
    //     setY(Math.sin(i / 1.5) * 100);
    //     setRotation(-10 + Math.sin(i / 10 + Math.PI * 2) * 10);
    // });

    return (
        <>
            <Sprite
                buttonMode={true}
                width={window.innerWidth}
                height={window.innerHeight}
                image={'https://img2.baidu.com/it/u=2483725794,542842425&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500'}
                anchor={0.5}
                x={x + window.innerWidth / 2}
                y={y + window.innerHeight / 2}
            />
        </>

    )
}
export default Rotate
