local scene1 = {}

local context = {
    lolipop = createCharacter({
        name = '萝莉泡泡',
        avatar = 'avatar/bob.png',
        figure = 'figure/bob.png',
        position = 'left',
        visible = true
    }),
    huaji = createCharacter({
        name = '滑稽',
        avatar = 'avatar/alice.png',
        figure = 'figure/alice.png',
        position = 'right',
        visible = true
    }),
    bgm1 = loadMusic('music/bgm1.ogg'),
    otherImage = loadImage('avatar/bob.png'),
    data = {}
}

function scene1.Run()
    local lolipop = context.lolipop
    local huaji = context.huaji
    BGM(context.bgm1)
    lolipop:say('谁要撅我！')
    huaji:say('我要撅你！')
    Menu({
        select1 = scene1
    })
end

return scene1
