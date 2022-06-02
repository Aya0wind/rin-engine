# 命令

## Name

设置对话名称为name  

| 名称   | 类型   | 默认值    |
| :----- | ------ | --------- |
| type   | string | Name      |
| name   | string | undefined |
| style  | object | undefined |
| kwargs | object | undefined |
示例

```json
{
    "type":"Name",
    "text":"[bob]",
    "style":{
        "font-size":30
    }
}
```

---

## Text

设置对话内容为text。  

| 名称   | 类型   | 默认值    |
| :----- | ------ | --------- |
| type   | string | Say       |
| style  | object | undefined |
| text   | string | undefined |
| kwargs | object | undefined |
示例

```json
{
    "type":"Text",
    "style":{
        "font-size":30
    },
    "text":"This is a nice day",
}
```

---

## Avatar

| 名称   | 类型   | 默认值    |
| :----- | ------ | --------- |
| type   | string | Avatar    |
| avatar | string | undefined |
| style  | object | undefined |
| kwargs | object | undefined |
示例

```json
{
    "type":"Avatar",
    "avatar":"bob_avatar_smile",
    "style":{
        "scale":0.7
    }
}
```

---

## Figure

| 名称     | 类型                    | 默认值    |
| :------- | ----------------------- | --------- |
| type     | string                  | Figure    |
| figure   | string                  | undefined |
| style    | object                  | undefined |
| effect   | string                  | undefined |
| position | string\|(number,number) | undefined |
| kwargs   | object                  | undefined |
示例

```json
{
    "type":"Avatar",
    "avatar":"bob_avatar_smile",
    "style":{
        "scale":0.7
    }
}
```

---

## BGM

| 名称   | 类型   | 默认值    |
| :----- | ------ | --------- |
| type   | string | BGM       |
| music  | string | undefined |
| kwargs | object | undefined |
示例

```json
{
    "type":"Say",
    "name":"bob",
    "text":"This is a nice day",
}
```

---

## Sound

| 名称   | 类型    | 默认值    |
| :----- | ------- | --------- |
| type   | string  | Sound     |
| name   | string  | undefined |
| delay  | number  | 0         |
| loop   | boolean | false     |
| kwargs | object  | undefined |

```json
{
    "type":"Say",
    "name":"bob",
    "text":"This is a nice day",
}
```

---

## Jump

| 名称   | 类型   | 默认值    |
| :----- | ------ | --------- |
| type   | string | Jump      |
| target | string | undefined |
| effect | string | 0         |
示例

```json
{
    "type":"Say",
    "name":"bob",
    "text":"This is a nice day",
}
```

---

## Load

| 名称   | 类型   | 默认值    |
| :----- | ------ | --------- |
| type   | string | Load      |
| scope  | string | local     |
| figure | object | undefined |
| avatar | object | undefined |
| video  | object | undefined |
| sound  | object | undefined |
| kwargs | object | undefined |
示例

```json
{
    "type":"Say",
    "name":"bob",
    "text":"This is a nice day",
}
```

---

## Window

| 名称      | 类型   | 默认值    |
| :-------- | ------ | --------- |
| type      | string | Window    |
| operation | string | undefined |
| effect    | string | undefined |
| kwargs    | object | undefined |
示例

```json
{
    "type":"Say",
    "operation":"hide",
    "teffectext":"This is a nice day",
}
```

---
