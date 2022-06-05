import { Provider } from "reto"
import AppRender from "./components"
import { States } from "./states"
import { SettingsStates } from "./states/SettingStates"
import { StageStates } from "./states/StageStates"
import { BackGroundStates } from "./states/StageStates/BackGroundStates"
import { FiguresStates } from "./states/StageStates/FigureStates"
import { SoundStates } from "./states/StageStates/SoundStates"
import { UIStates } from "./states/UIStates"
import TextUIStates from "./states/UIStates/TextUIStates"



const App = () => {
    return (
        <Provider of={TextUIStates} memo>
            <Provider of={UIStates} memo>
                <Provider of={SoundStates} memo >
                    <Provider of={BackGroundStates} memo>
                        <Provider of={FiguresStates} memo>
                            <Provider of={StageStates} memo>
                                <Provider of={SettingsStates} memo>
                                    <Provider of={States} memo>
                                        <AppRender />
                                    </Provider>
                                </Provider>
                            </Provider>
                        </Provider>
                    </Provider>
                </Provider>
            </Provider>
        </Provider>
    )
}

export default App
