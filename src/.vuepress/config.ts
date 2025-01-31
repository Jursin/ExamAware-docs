import { defineUserConfig, Plugin } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "ExamAware 文档",
      description: "ExamAware 的文档",
    },
    "/en-us/": {
      lang: "en-US",
      title: "ExamAware Documentation",
      description: "documentation of ExamAware",
    },
  },
  theme
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
