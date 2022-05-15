import { Container, useApp, useTick } from '@inlet/react-pixi';
import './index.module.scss'
import * as PIXI from 'pixi.js'
import { useRef } from 'react';
import { RainEffectProps } from '../../types/props';
import { convertFileSrc } from '@tauri-apps/api/tauri';
const RainEffect = ({ number, rainSpeed }: RainEffectProps) => {
    // 动画参数
    // 设置缩放的系数
    const scalePreset = 0.3;
    const app = useApp()
    const container = useRef<PIXI.Container>();
    let node = <Container
        ref={container}
        pivot={50}
        scale={10}
        x={75}
        y={75}
    >
    </Container>

    // container.rotation = -0.2;
    const bunnyList: any = [];
    // 监听动画更新
    useTick((delta) => {
        // 获取长宽，用于控制雪花出现位置
        const stageWidth = app.screen.width;
        const stageHeight = app.screen.height;
        for (let i = 0; i < number; i++) {
            // 创建对象
            const bunny = PIXI.Sprite.from(convertFileSrc('/Users/li/CLionProject/tauri-app/src/assets/rain_2.png'));
            // 随机雨点大小
            let scaleRand = Math.random();
            if (scaleRand <= 0.5) {
                scaleRand = 0.5;
            }
            bunny.scale.x = scalePreset * scaleRand;
            bunny.scale.y = scalePreset * scaleRand;
            // 设置锚点
            bunny.anchor.set(0.5);
            // 随机雪花位置
            bunny.x = Math.random() * stageWidth - 0.5 * stageWidth;
            bunny.y = 0 - 0.5 * stageHeight;
            // @ts-ignore
            bunny['dropSpeed'] = Math.random() * 2;
            // @ts-ignore
            bunny['acc'] = Math.random();
            bunny['alpha'] = Math.random();
            if (bunny['alpha'] >= 0.5) {
                bunny["alpha"] = 0.5;
            }
            if (bunny['alpha'] <= 0.2) {
                bunny['alpha'] = 0.2;
            }
            container.current.addChild(bunny);
            // 控制每片雨点
            bunnyList.push(bunny);
        }
        // 雨点落下
        for (const e of bunnyList) {
            e['dropSpeed'] = e['acc'] * 0.01 + e['dropSpeed'];
            e.y += delta * rainSpeed * e['dropSpeed'] * 1.1 + 3;
        }
        // 控制同屏雨点数
        if (bunnyList.length >= 2500) {
            bunnyList.unshift();
            container.current.removeChild(container.current.children[0]);
        }
    })
    return node
}

export default RainEffect
