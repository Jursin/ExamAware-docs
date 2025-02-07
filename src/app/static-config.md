# 使用静态配置文件

本功能支持通过静态配置文件部署，也可以通过管理服务器部署，您可以根据情况自由选择。

您可以[编写配置文件](./introduction/config-edit.md)，并将其托管到静态网站上，以下以托管到 GitHub 公开存储仓库为例。

## 开始

- 新建 GitHub 公开存储仓库
- 上传配置文件，如 `exam_config.json`
- 复制 `Raw` 直链并粘贴到应用`请求地址`文本框，点击保存配置

> [!tip]
>
> 由于 GitHub 的 `Raw` 直链可能会被墙，您可以使用以下方法解决：
>
> 可以在 `Raw ` 直链前加上镜像源，如
>
> ```
> https://github.moeyy.xyz/https://raw.githubusercontent.com/{owner}/{repo}/refs/heads/main/exam_config.json
> ```

- 点击`请求配置`加载配置文件并进入看板（下次可直接点击`直接进入看板`加载上次配置文件）

### 集控服务器

不支持，请使用其他版本客户端。
