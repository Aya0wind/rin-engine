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

function Commands.Call(scene)
    NextScene = scene
    PushScene()
    PushCommandStack({
        type = 'Call',
        name = scene.name,
    })
end

function Commands.Avatar(picture)
    PushCommandStack({
        type = 'Avatar',
        picture = picture,
    })
end

function Commands.BGM(music)
    PushCommandStack({
        type = 'BGM',
        music = music
    })
end

function Commands.BG(picture)
    PushCommandStack({
        type = 'BG',
        picture = picture
    })
end
