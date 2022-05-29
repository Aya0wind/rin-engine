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
    Commands.Say('萝莉泡泡', '谁要撅我！')
    Commands.Say('滑稽', '我要撅你!')
    Commands.Say('萝莉泡泡', '那就来吧！')
    Commands.Say('滑稽', '现在就来！')
end
