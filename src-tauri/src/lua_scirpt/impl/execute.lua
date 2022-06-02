-- require 'index'
-- require 'commands'
-- require 'util'
__ResponseTemp__ = {}
__CoContext__ = {}
__TaskThread__ = nil
NextScene = Stages.stage1.scenes.scene1

function PushScene(scene)
    local sceneThread = coroutine.create(scene.Run)
    table.insert(__CoContext__, sceneThread)
end

function PopScene()
    table.remove(__CoContext__, #__CoContext__)
end

function Main()
    repeat
        if (__CoContext__[#__CoContext__] == nil) then
            if (NextScene == nil) then
                return nil
            else
                PushScene(NextScene)
            end
        end

        local currentSceneCo = __CoContext__[#__CoContext__];

        while true do
            __CommandStack__ = {}
            local status, _ = coroutine.resume(currentSceneCo, __ResponseTemp__)
            if (status ~= false) then
                coroutine.yield(__CommandStack__)
            else
                break
            end
        end
        PopScene()
        PushScene(NextScene)
    until (#__CoContext__ == 0)
end
