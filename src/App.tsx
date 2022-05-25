import { Provider } from "reto"
import AppRender from "./components"
import { SettingsStates } from "./controller/states/settings_states"
import { StageStates } from "./controller/states/stage_states"
import UIStates from "./controller/states/ui_states"

const App = () => {
    return (
        <Provider of={UIStates} memo>
            <Provider of={StageStates} memo>
                <Provider of={SettingsStates} memo>
                    <AppRender />
                </Provider>
            </Provider>
        </Provider>
    )
}

export default App
