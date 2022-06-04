Stages = {
    stage1 = {
        resource = {
            backGrounds = {
                default = 'background/c1.jpg'
            },
            avatar = {
                default = 'figure/n2.png'
            }
        },
        scenes = {
            scene1 = {
                name = '场景1',
            }
        }
    }
}

function Stages.stage1.scenes.scene1.Run()
    Commands.BG(Stages.stage1.resource.backGrounds.default)
    Commands.Avatar(Stages.stage1.resource.avatar.default)
    Commands.Say('四季ナツメ', '你没事吧？')
    Commands.Say('四季ナツメ', '角色B说话！')
    Commands.Say('四季ナツメ', '角色C说话！')
    Commands.Say('四季ナツメ', '角色D说话！')
end
