import './index.scss'
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom';
import AppRender from './App';
import { AppProvider } from '@inlet/react-pixi';
import { Application } from '@pixi/app';
import { window } from '@tauri-apps/api';
import { LogicalSize } from '@tauri-apps/api/window';

ReactDOM.render(
  <AppRender />,
  document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
