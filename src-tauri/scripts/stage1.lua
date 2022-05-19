
local bob = createCharacter({
    name = 'bob',
    avatar = 'avatar/bob.png',
    figure = 'figure/bob.png',
    position = 'left'
})


local alice = createCharacter({
    name = 'alice',
    avatar = 'avatar/alice.png',
    figure = 'figure/alice.png',
    position = 'right'
})

local stage = createStage()

local bgm1 = loadMusic('music/bgm1/ogg')

bgm1.play()

bob:say('Hello Alice')
alice:say('Hello Bob')
bob:say('Hello Alice')
bob:say('Hello Alice')

bgm1.stop()
