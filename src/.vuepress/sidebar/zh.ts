import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "首页",
      link: "index.md",
      icon: "fa-solid fa-house",
    },
  ],
  "/introduction/": [
    {
      text: "应用介绍",
      icon: "fa-solid fa-circle-info",
      link: "index.md",
      children: [
        {
          text: "应用选择",
          link: "choose.md",
          icon: "fa-solid fa-list-check",
        },
        {
          text: "配置文件编写",
          link: "config-edit.md",
          icon: "fa-solid fa-code",
        },
        {
          text: "关于我们",
          link: "about.md",
          icon: "fa-solid fa-users",
        },
      ],
    },
  ],
  "/app/": [
    {
      text: "桌面端",
      icon: "fa-solid fa-desktop",
      link: "index.md",
      children: [
        {
          text: "静态文件",
          link: "static-config.md",
          icon: "fa-solid fa-file",
        },
      ],
    },
  ],
  "/web/": [
    {
      text: "网页端",
      icon: "fa-solid fa-globe",
      link: "index.md",
      children: [
        {
          text: "部署",
          link: "deploy.md",
          icon: "fa-solid fa-server",
        },
      ],
    },
  ],
  "/management/": [
    {
      text: "集控",
      icon: "fa-solid fa-network-wired",
      link: "index.md",
      children: [
        {
          text: "客户端识别",
          link: "client-identify.md",
          icon: "fa-solid fa-id-card",
        },
      ],
    },
  ],
  "/community/": [
    {
      text: "社区",
      icon: "fa-solid fa-people-group",
      link: "index.md",
      children: [
        {
          text: "社区规范",
          link: "rules.md",
          icon: "fa-solid fa-scale-balanced",
        },
        {
          text: "贡献指南",
          link: "contributing.md",
          icon: "fa-solid fa-handshake",
        },
      ],
    },
  ],
});