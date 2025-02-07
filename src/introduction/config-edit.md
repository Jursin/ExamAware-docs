# 配置文件编写

本应用配置文件记录了考试名称、提示信息，考试信息（科目名称、开始/结束时间、结束提醒时间）。

您可以按照模板手动编写配置文件，也可以直接使用[配置文件编辑器（legacy）](https://github.com/ExamAware/DSZExamShowBoardEditor/releases/latest)编写配置文件。

> [!tip]
>
> 在新版本（即 [`ExamAware2`](https://github.com/ExamAware/ExamAware2) 和 [`ExamCloudSchedule`](https://github.com/ExamAware/ExamCloudSchedule) ）中，已经集成了编辑器，可以略过本部分帮助。

## 手动编写配置文件   
> [!warning]
>
> 请确保 json 配置文件编码为 `UTF-8`，换行符为 `LF`，按照 `json` 文件格式填写，不然可能会出一些神奇的 Bug 。
>
> 不确定？可以使用 [Visual Studio Code](https://code.visualstudio.com/) 编辑配置文件，支持自动检查和语法高亮，右下角显示编码格式和换行符，点击即可更改。

 1. 新建一个名为 `exam_config.json` 的文件
 2. 开始编辑文件，对应位置替换为指定内容，模板如下：
 ```json
{
  "examName": "考试名称",
  "message": "提示信息",
  "examInfos": [
    {
      "name": "科目",
      "start": "2025-01-01T07:00:00",
      "end": "2025-01-01T08:00:00",
      "alertTime": 15
    },
    {
      "name": "科目/科目",
      "start": "2025-01-01T09:00:00",
      "end": "2025-01-01T10:00:00",
      "alertTime": 15
    }
  ]
}
```    

> [!tip]
>
> 考试名称不能为空，`examInfos` 至少需要一条数据（科目名称不能为空，开始时间和结束时间不能为空，且前者必须早于后者，考试结束提醒时间必须是非负整数）。
>
> 如果有两个以"/"分隔的科目可以自动转化为双行显示（旧桌面端）

## 使用配置文件编辑器（legacy）

> [!caution]
>
> 配置文件编辑器(legacy)不再维护，如果您汇报使用此编辑器遇到的相关问题，开发者可能不会受理。

您可以前往 [ExamShowBoardEditor（已存档·只读）](https://github.com/ExamAware/DSZExamShowBoardEditor/releases/latest) 获取配置文件编辑器

1. 运行解压出的 `GUI.exe`
2. 点击 `添加考试信息` 按钮添加考试信息
  - 输入考试科目名称
  - 输入考试日期，格式为 `YYYY-MM-DD` ，例如 `2025-01-01`
  - 分别输入考试开始/结束时间，格式为 `HH:MM:SS` ，例如 `08:00:00`
  - 点击 `保存` 按钮保存输入的考试信息
3. 点击 `保存到json` 按钮保存到配置文件中
  - 输入考试标题
  - 输入考试副标题
  - 输入考场号
  - 点击 `保存` 按钮导出配置文件

> [!tip]
>
> 点击 `保存json` 按钮后配置文件默认会保存在配置文件编辑器所在目录下，文件名为 `exam_config.json`
>
> `message` 与 `room` 内容必填（可填空格隐藏），`examInfos` 至少需要一条数据。

4.点击 `打开配置文件` 按钮可打开并编辑配置文件
  - 在下方的选择框中选择考试科目
  - 点击 `编辑选中信息` 按钮编辑选中的考试科目信息
  - 点击 `删除` 按钮删除选中的考试科目信息
  - 点击 `上移/下移` 按钮移动选中的考试科目信息(以调整考试科目显示的顺序)

> [!tip]   
>
>您可以将配置文件复制到 `U盘` 等存储介质中，以实现配置文件的转移及部署；您也可以使用[集控](/management/)以实现配置文件的分发及部署。