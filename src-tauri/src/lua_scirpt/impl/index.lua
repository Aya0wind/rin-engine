Stages = {
    stage1 = {
        resource = {
            avatar = {

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
    Commands.Say('角色A', '角色A说话！')
    Commands.Say('角色B', '角色B说话！')
    Commands.Say('角色C', '角色C说话！')
    Commands.Say('角色D', '角色D说话！')
end
