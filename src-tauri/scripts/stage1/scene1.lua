local scene1 = {
    name = '场景1'
}
function scene1.Run()
    local result = Commands.BGM('aaaa')
    print(result)
    result = Commands.Say('aaaa', 'texttext')
    print(result)
    result = Commands.Say('aaaa1', 'texttext1')
    print(result)
    result = Commands.Say('aaaa2', 'texttext2')
    print(result)
    result = Commands.Say('aaaa3', 'texttext3')
    print(result)
    result = Commands.Say('aaaa4', 'texttext4')
    print(result)
    result = Commands.Say('aaaa5', 'texttext5')
    print(result)
    test = Commands.Say('aaaa6', 'texttext6')
end

return scene1
