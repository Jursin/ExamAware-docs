import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "首页",
      link: "index.md",
    },
  ],
  "/app/": [
    {
      icon: "fa-solid fa-lightbulb",
      text: "应用帮助",
      children: [
        "index.md",
        "setup.md",
        {
          text: "档案设置",
          collapsible: true,
          expanded: true,
          prefix: "profile/",
          children: [
            "faq.md",
          ],
          icon: "fa-solid fa-file-lines"
        },
      ],
    },
  ],
  "/management/": [
    {
      text: "集控和网页版应用帮助",
      children: [
        "README.md",
        {
          text: "ExamCloud 云配置",
          collapsible: true,
          expanded: true,
          prefix: "examcloud/",
          children: [
            "client-identify.md",
          ],
          icon: "fa-solid fa-file-lines"
        },
        {
          text: "ExamShowboard 配置",
          collapsible: true,
          expanded: true,
          prefix: "examshowboard/",
          children: [
            "static-config.md",
          ],
          icon: "fa-solid fa-file-lines"
        },
        {
          text: "ExamSchedule 配置",
          collapsible: true,
          expanded: true,
          prefix: "examschedule/",
          children: [
            "management-config.md",
          ],
          icon: "fa-solid fa-file-lines"
        },
      ],
    },
  ],
});
