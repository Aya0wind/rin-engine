import { Provider } from "reto"
import AppRender from "./components"
import { States } from "./util/states"
import { SettingsStates } from "./util/states/settings_states"
import { StageStates } from "./util/states/stage_states"
import UIStates from "./util/states/ui_states"

const App = () => {
    return (
        <Provider of={UIStates} memo>
            <Provider of={StageStates} memo>
                <Provider of={SettingsStates} memo>
                    <Provider of={States} memo>
                        <AppRender />
                    </Provider>
                </Provider>
            </Provider>
        </Provider>
    )
}

export default App
