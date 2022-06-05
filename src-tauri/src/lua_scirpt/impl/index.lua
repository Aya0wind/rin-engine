Stages = {
    stage1 = {
        resource = {
            backGrounds = {
                default = 'background/c1.jpg',
                b1 = 'background/c2.jpg',
                b2 = 'background/c3.jpg',
            },
            avatar = {
                default = 'figure/n1.png',
                b1 = 'figure/n2.png',
            },
            figure = {
                default = 'figure/n1.png',
            }
        },
        scenes = {
            scene1 = {
                name = '场景1',
            }
        }
    }
}

Character = {
    name = '',
    avatar = 0,
    figure = '',
}

function Character:new(name, avatar, figure)
    local self = {}
    setmetatable(self, { __index = Character })
    self.name = name
    self.avatar = avatar
    self.figure = figure
    return self
end

function Character:say(text)
    Commands.Avatar(self.avatar)
    Commands.Say(self.name, text)
end

function Stages.stage1.scenes.scene1.Run()
    local natsume = Character:new(
        '四季ナツメ',
        Stages.stage1.resource.avatar.default,
        Stages.stage1.resource.figure.default)
    Commands.BG(Stages.stage1.resource.backGrounds.default)
    natsume:say('你好')
    natsume.avatar = Stages.stage1.resource.avatar.b1
    natsume:say('变换头像')
end
