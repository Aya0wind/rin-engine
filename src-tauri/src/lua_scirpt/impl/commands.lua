Commands = {}
function PushCommandStack(command)
    table.insert(__CommandStack__, command)
end

function Commands.Say(name, text)
    PushCommandStack({
        type = 'Say',
        name = name,
        text = text
    })
    return coroutine.yield()
end

function Commands.BGM(music)
    PushCommandStack({
        type = 'Bgm',
        music = music
    })
end

function Commands.Call(scene)
    NextScene = scene
    PushScene()
    PushCommandStack({
        type = 'Call',
        name = scene.name,
    })
end
